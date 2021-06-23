//selecting navigation elements
let navElements = document.getElementsByClassName("navElement");

//selecting next and back buttons
let next = document.getElementById("next");
let last = document.getElementById("last");
// selecting main content elements
let projectContent = document.getElementById("projectContent");
let contentTitle = document.getElementById("contentTitle");
let contentImg = document.getElementById("contentImg").getElementsByTagName('img')[0];
let contentDescription = document.getElementById("contentDescibtion");
let contentTime = document.getElementById("contentTime");
let contentTech = document.getElementById("contentTech");
let contentLink = document.getElementById("contentLink");
let open = document.getElementById("open").getElementsByTagName('a')[0];;
let close = document.getElementById("close");



// on click close hide projectContent
close.addEventListener("click",e=>{
    projectContent.setAttribute("class","projectContent hide");
    next.setAttribute("class", "arrow");
    last.setAttribute("class", "arrow");

})
// adding mouseover listners to navigation elements
for (let index = 0; index < navElements.length; index++) {
    navElements[index].addEventListener('mouseover', e => {
        //set next and back buttons to navigate through the selected kind of projects
        next.setAttribute("project", navElements[index].innerHTML);
        last.setAttribute("project", navElements[index].innerHTML);
        //load the first projects of this type
        loadProject(navElements[index].innerHTML);
    });
}

// takes the id of the project type as an argument
function loadProject(ProjectTypeId) {
    // finding the projectType needed
    let projectType = null;
    for (let index = 0; index < projects.length; index++) {
        //if found save it
        if (projects[index][0] == ProjectTypeId) {
            projectType = projects[index];
        }

    }
    //if not found return error
    if (projectType == null) {
        console.log("Error: Project type not found");
        return 1;
    }

    //check if there is no other project of this type then return an error (funny one)
    if (projectType.length <= 1) {
        //special entry in the project array for such cases
        showProject(projects[0][1]);
        projectContent.setAttribute("project", projects[0][0]);
        projectContent.setAttribute("index", 1);
    } else {

        projectContent.setAttribute("project", projectType[0]);
        projectContent.setAttribute("index", 1);
        showProject(projectType[1]);
    }

}


function nextProject() {

    //this should not be possible but to avoid errors
    if (projectContent.getAttribute("project") == "") {
        return;
        //getting the current project and current index
    } else {
        let pId = projectContent.getAttribute("project");
        let pIndex = +projectContent.getAttribute("index");
        // finding the projectType needed
        let projectType = null;
        for (let index = 0; index < projects.length; index++) {
            //if found save it
            if (projects[index][0] == pId) {
                projectType = projects[index];
            }

        }
        //if not found return error
        if (projectType == null) {
            console.log("Error: Project type not found");
            return 1;
        }

        /*
        **************************************
        **************************************
        ANIMATION STAR TO BE MANIPULATED HERE
        **************************************
        **************************************
        */
        // starts move from right to left
        starDirection = 1;
        //getting next project
        if (pIndex + 1 < projectType.length) {
            showProject(projectType[pIndex + 1]);
            projectContent.setAttribute("index", pIndex + 1);
        } else {
            showProject(projectType[1]);
            projectContent.setAttribute("index", 1);
        }

    }


}


function lastProject() {
    //this should not be possible but to avoid errors
    if (projectContent.getAttribute("project") == "") {
        return;
        //getting the current project and current index
    } else {
        let pId = projectContent.getAttribute("project");
        let pIndex = +projectContent.getAttribute("index");

        // finding the projectType needed
        let projectType = null;
        for (let index = 0; index < projects.length; index++) {
            //if found save it
            if (projects[index][0] == pId) {
                projectType = projects[index];
            }

        }
        //if not found return error
        if (projectType == null) {
            console.log("Error: Project type not found");
            return 1;
        }


        /*
        **************************************
        **************************************
        ANIMATION STAR TO BE MANIPULATED HERE
        **************************************
        **************************************
        */
        // starts move from  left to right
        starDirection = -1;
        //getting next project

        if (pIndex - 1 >= 1) {
            showProject(projectType[pIndex - 1]);
            projectContent.setAttribute("index", pIndex - 1);
        } else {
            showProject(projectType[projectType.length - 1]);
            projectContent.setAttribute("index", projectType.length - 1);
        }

    }


}
// takes a formatted project and showes it 
function showProject(project) {
    //show main content div
    projectContent.setAttribute("class", "projectContent show");

    //if arrows are hidden then show
    if (!next.getAttribute("class").includes("showArrow")) {
        next.setAttribute("class", "arrow showArrow");
        last.setAttribute("class", "arrow showArrow");
    }

    if (project.title == "") {
        //if no title provided show dummy title
        contentTitle.innerHTML = "My Project"
    } else {
        contentTitle.innerHTML = project.title;
    }
    //Description
    if (project.description == "") {

        contentDescription.innerHTML = ""
    } else {
        contentDescription.innerHTML = "<strong>Description: </strong><div class='text'>" + project.description + "</p>";
    }
    //Time
    if (project.time_needed == "") {

        contentTime.innerHTML = ""
    } else {
        contentTime.innerHTML = "<strong>Time needed: </strong><div class='text'>" + project.time_needed + "</p>";
    }
    //Tech
    if (project.tech == "") {

        contentTech.innerHTML = ""
    } else {
        contentTech.innerHTML = "<strong>Technologies used: </strong><div class='text'>" + project.tech + "</p>";
    }
    //link
    if (project.link == "") {

        open.parentElement.setAttribute("style","display:none");
        open.setAttribute("href",``);
    } else {
        open.parentElement.setAttribute("style","");
        open.setAttribute("href",`${project.link}`);
    }
    //img
    if (project.image == "") {
        contentImg.setAttribute("style", "display:none");
    } else {
        contentImg.setAttribute("style", "display:block;  border-radius: 10px;");
        contentImg.setAttribute("width", project.imgWidth == "" ? "320px" : project.imgWidth);
        contentImg.setAttribute("height", project.imgHeight == "" ? "310px" : project.imgHeight);
        contentImg.setAttribute("src", project.image);
    }
}