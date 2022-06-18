import {projectList} from "./creatingProject";
import {sortArray} from "./editingProject";

function dragAndDropEvent() {
    const project = document.querySelector(".project");
    project.addEventListener("mousedown", enableDraggable);
    
    const tiles = document.querySelectorAll(".project .tile");
    tiles.forEach((tile) => {
        dragStartEndEvent(tile);
    });

    project.addEventListener("dragover", dragOver);
}

// when three dots is mousedown, enable draggable for the tile
function enableDraggable(e) {
    const isMenuIcon = e.target.matches("[data-drag]");
    if (isMenuIcon) {
        e.target.parentNode.draggable = true;
    } else {
        return;
    }
}

function dragStartEndEvent(tile) {
    tile.addEventListener("dragstart", () => {
        tile.classList.add("dragging");                     
    });

    tile.addEventListener("dragend", () => {
        tile.classList.remove("dragging");
        tile.draggable = false;
        sortArray();
        console.log(projectList);                 
    });
}

// callback function when you drag projectTile over tiles
function dragOver(e) {
    e.preventDefault();
    const project = document.querySelector(".project");
    const dragging = document.querySelector(".dragging");
    const form = document.querySelector("#projectForm");
    const afterElement = getDragAfterElement(e.clientY);

    if (afterElement == null) {
        project.insertBefore(dragging, form);              
    } else {
        project.insertBefore(dragging, afterElement);
    }
}

// find the closest project tile to the cursor
function getDragAfterElement(y) {
    // get all tiles inside project except the one tile that is dragging
    const projectTiles =[...document.querySelectorAll(".project .tile:not(.dragging)")]; 
    
    return projectTiles.reduce((closest, tile) => {
        const box = tile.getBoundingClientRect(); // get the size for the tile
        const offset = y - box.top - box.height/2; // offset between the cursor and tile center point
        
        if (offset<0 && offset>closest.offset) {              
            return {                     
                offset: offset,
                element: tile 
            }
        } else {
            return closest;
        }                                 
    }, {offset: Number.NEGATIVE_INFINITY}).element;

}

export {dragAndDropEvent, dragStartEndEvent};