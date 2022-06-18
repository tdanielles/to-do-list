import {displayTask, updateTitle, id} from "./creatingTask";
import {revertEditFormLocation} from "./editingTask";
import {revertOptionLocation} from "./editingProject";
import {dragStartEndEvent} from "./dragAndDrop";
import {checkWhichHomeTile} from "./homeSection";

// event listener for creating a form for adding projects
const createEventListener = () => {
    const cancel = document.getElementById("projectCancelBtn");
    cancel.addEventListener("click", hideProjectForm);
    
    const add = document.getElementById("addProject");
    add.addEventListener("click", showProjectForm);
    
    const submit = document.getElementById("projectForm");
    submit.addEventListener("submit", processProjectInput);
    
    const leftPanel = document.getElementById("leftPanel");
    leftPanel.addEventListener("click", checkTile);

    displayProject(projectList);
}

// get projects from local storage or start with empty
let defaultProjectList=[];
let projectList = localStorage.getItem("myProjectList");
    projectList = JSON.parse(projectList || JSON.stringify(defaultProjectList));

// process input from add project
const processProjectInput = (e) => {
    let projectName = document.getElementById("projectInput").value;
    let dataProject = findNextDataset();
    const newProject = CreateProject(dataProject, projectName);

    projectList.push(newProject);
    saveToLocalStorage();

    addProject(dataProject, projectName);
    hideProjectForm();
    e.preventDefault();
}

// save projectList and last id data to local storage
function saveToLocalStorage() {
    localStorage.setItem("myProjectList", JSON.stringify(projectList));
    localStorage.setItem("currentId", (id).toString());
}

// create project
const CreateProject = (dataProject, name) => {
    const taskList=[];
    const taskNum = taskList.length;
    return{
        dataProject,
        name,
        taskList,
        taskNum
    }
}

const showProjectForm = () => {
    const projectForm = document.querySelector("#projectForm");
    projectForm.classList.remove("hidden");
    document.getElementById("projectInput").focus(); // focus on input fields
}

const hideProjectForm = () => {
    const projectForm = document.querySelector("#projectForm");
    const projectInput = document.querySelector("#projectInput");

    projectInput.value = "";
    projectForm.classList.add("hidden");
}

// display all projects in left panel
const displayProject = (array) => {
    array.forEach(project =>{
        addProject(project.dataProject, project.name);
    });
}

const addProject = (dataProject, textInput) => {
    const project = document.querySelector(".project");
    const form = document.querySelector("#projectForm");

    const container = document.createElement("div");
    container.setAttribute("data-project", `${dataProject}`);
    container.classList.add("tile");
    project.insertBefore(container, form);

    // menu to rename or delete project
    const menuIcon = createSpanIcon("menu");
    menuIcon.setAttribute("data-drag", "");
    container.appendChild(menuIcon);

    const projectInfo = document.createElement("div");
    projectInfo.classList.add("projectInfo");
    container.appendChild(projectInfo);

    const projectName = document.createElement("div");
    projectName.classList.add("projectName");
    projectName.textContent = textInput;
    
    projectInfo.appendChild(projectName);

    const editdiv = document.createElement("div");
    editdiv.classList.add("editContainer");
    editdiv.setAttribute("data-dropdown","");
    container.appendChild(editdiv);
    
    const editIcon = createSpanIcon("more_vert");
    editIcon.setAttribute("data-dropdown-button","");
    editdiv.appendChild(editIcon);

    dragStartEndEvent(container);
}

// create a span icon of google material icons
const createSpanIcon = (name) => {
    const icon = document.createElement("span");
    icon.classList.add("material-icons-round");
    icon.textContent = name;
    return icon;
}

// find next data-set
const findNextDataset = () => {
    const allprojects = document.querySelectorAll("[data-project]");
    return allprojects.length;
}

// remove add task button when home tiles are selected in left panel
function hideAddTaskBtn() {
    const addTaskBtn = document.getElementById("addList");
    addTaskBtn.classList.add("hidden");
}

// show addTaskBtn when project tiles are selected in left panel
function showAddTaskBtn() {
    const addTaskBtn = document.getElementById("addList");
    addTaskBtn.classList.remove("hidden");
}

// check to see what tile is selected
function checkTile(e) {
    let homeTile = e.target.closest(".home .tile");
    let projectTile = e.target.closest(".project .tile");
    
    if (homeTile != null) {
        const title = homeTile.querySelector("[data-name]");
        selectTile(homeTile);
        revertOptionLocation();
        checkWhichHomeTile(homeTile);
        updateTitle(title);
        hideAddTaskBtn();
    } else if (projectTile != null) {
        const title = projectTile.querySelector(".projectName");
        let dataProject = projectTile.dataset.project;
        
        revertEditFormLocation();   
        revertOptionLocation();

        displayTask(dataProject);
        selectTile(projectTile);
        updateTitle(title);
        showAddTaskBtn();
    } else {
        return;
    }
}

// when selecting a tile from left panel apply selected class
const selectTile = (node) => {
    const selectedTile = document.querySelector(".selected");   
    selectedTile.classList.remove("selected"); // remove selected class from old tile

    node.classList.add("selected"); // add selected class to current tile
}

export {createEventListener, createSpanIcon, projectList, saveToLocalStorage, hideAddTaskBtn};