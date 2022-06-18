import {projectList, saveToLocalStorage} from "./creatingProject";
import {updateTitle} from "./creatingTask";

function editContainerEventListener() {
    document.addEventListener("click", showDropDown);

    const option = document.querySelector(".project .option");
    option.firstElementChild.addEventListener("click", showRenameForm);
    option.lastElementChild.addEventListener("click", deleteProject);

    const formRenameBtn = document.querySelector(".rename-rename-btn");
    formRenameBtn.addEventListener("click", function(e) {
        processRenameInput(e);
        e.preventDefault();
    });

    const formCancelBtn = document.querySelector(".rename-cancel-btn");
    formCancelBtn.addEventListener("click", function() {
        revertRenameFormLocation();
        displayRenamedProject();
    });
}

const showDropDown = (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");

    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null ) {
        return;
    }

    let currentDropDown;
    if (isDropdownButton) {
        relocateOption(e);
        currentDropDown = e.target.closest("[data-dropdown]");
        setTimeout(function() {
            currentDropDown.classList.toggle("active");
        }, 0);
    }

    // if click other drop down then other disappear
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropDown) {
            return;
        }
        dropdown.classList.remove("active");
    });
}

const showRenameForm = (e) => {
    let editContainerNode = e.target.parentNode.parentNode;
    let tileNode = editContainerNode.parentNode;

    hideDropDown(editContainerNode);

    let haveForm = checkFormExist();
    if (haveForm === true) {
        revertRenameFormLocation();
        displayRenamedProject();
    }

    relocateRenameForm(tileNode);
    animateRenameForm();

    document.getElementById("projectRenameInput").focus();
    tileNode.classList.add("hidden");
}

const hideDropDown = (editContainerNode) => {
    editContainerNode.classList.remove('active');
}

// check to see if the form already exists
const checkFormExist = () => {
    const renameForm = document.querySelector("#renameForm");
    if (renameForm.classList.contains("hidden")) {
        return false;
    } else {
        return true;
    }
}

function relocateRenameForm(tileNode){
    const projectNode = tileNode.parentNode;
    const renameForm = document.getElementById("renameForm");

    const nameNode = tileNode.querySelector(".projectName");
    let name = nameNode.textContent;

    const input = renameForm.querySelector("input");
    input.value = name;

    projectNode.insertBefore(renameForm, tileNode);
}

function revertRenameFormLocation(){
    const renameForm = document.getElementById("renameForm");
    const project = document.querySelector(".project");

    renameForm.classList.add("hidden");
    project.appendChild(renameForm);
}

const animateRenameForm = () =>{
    const form = document.querySelector("#renameForm");

    setTimeout(function() {
        form.classList.remove("hidden");
    },0);
}

//process the inputed renamed project
const processRenameInput = (e) =>{
    const tileNode = document.querySelector(".project .tile.hidden");
    let renameInput = document.getElementById("projectRenameInput").value;
    const projectName = tileNode.querySelector(".projectName");
    projectName.textContent = renameInput;


    let dataNum = tileNode.dataset.project;
    projectList[dataNum].name = renameInput;
    saveToLocalStorage();

    displayRenamedProject();
    updateTitle(projectName); // update title on right panel
    revertRenameFormLocation();
}

const displayRenamedProject = () => {
    const hiddenTile = document.querySelector("div.hidden");
    hiddenTile.classList.remove("hidden");
}

// remove project from list
const deleteProject = (e) => {
    let tile = e.target.closest(".tile");
    let index = tile.dataset.project;

    // if the tile to delete is selected, select the tile after and update 
    if (tile.classList.contains("selected")) { 
        const today = document.querySelector("#today");
        const nameNode = today.querySelector("[data-name]");
        today.classList.add("selected");
        updateTitle(nameNode);    
    }

    revertOptionLocation(e);
    tile.remove();
    sortArray();
    projectList.splice(index,1);
    saveToLocalStorage();
}

function sortArray() {
    let i=0;
    const tiles = document.querySelectorAll(".project .tile");
    tiles.forEach((tile) => {
        let dataNum=tile.dataset.project;
        tile.dataset.project = i;
        projectList[dataNum].dataProject = i;
        i++;
    });
    // reorder projects according to their dataProject number
    projectList.sort((a,b) => a.dataProject - b.dataProject);
    saveToLocalStorage();
}

function relocateOption(e) {
    const editContainer = e.target.closest(".editContainer");
    if (e.target.closest(".tile") != null) {
        const projectOption = document.getElementById("projectOption");
        projectOption.classList.remove("hidden");
        editContainer.appendChild(projectOption);
    } else if (e.target.closest("li") != null) {
        const listOption = document.getElementById("listOption");
        listOption.classList.remove("hidden");
        editContainer.appendChild(listOption);        
    }
}

function revertOptionLocation(){
    const projectOption = document.querySelector("#projectOption");
    projectOption.classList.add("hidden");
    const project = document.querySelector(".project");
    project.appendChild(projectOption);

    const listOption = document.querySelector("#listOption");
    listOption.classList.add("hidden");
    const listToDo = document.querySelector(".list-todo");
    listToDo.appendChild(listOption);
}

export {editContainerEventListener, showRenameForm, hideDropDown, deleteProject, revertOptionLocation, sortArray};