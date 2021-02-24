

var overlayBtn = document.getElementById("overlay-close-btn")
overlayBtn.addEventListener("click", function(){
    var divsToHide = document.getElementsByClassName("overlay-items"); 
    for(var i = 0; i < divsToHide.length; i++){
        divsToHide[i].classList.remove("overlay-show")
    }

    for(var i = 0; i < document.getElementsByClassName("overlay-content").length; i++){
        document.getElementsByClassName("overlay-content")[i].classList.add("overlay-hide")
    }


});

var projectLis = document.getElementsByClassName("project-lister")

var getProjectTitleNumber = function(element){

    var projectTitleLis = document.querySelectorAll(".project-navigator li");
    for (var i = 0; i < projectTitleLis.length; i++) {
        if(projectTitleLis[i] == element){
            return i;
        }
    }

}


var showOverlayFromTitle = function(){
    document.getElementById("project-overlay").classList.add("overlay-show")

    var projctCards = document.getElementsByClassName("project-lister");
    const projectNumber = getProjectTitleNumber(this);
    const selectedProjectCard = projctCards[projectNumber];
    showProjectDetails(selectedProjectCard);
    console.log(projectNumber);

}

var showProjectDetails = function(project){
    document.getElementById("project-overlay").classList.add("overlay-show")
    for (var i = 0; i < project.childNodes.length; i++) {
        console.log(project.childNodes[i])
        if(project.childNodes[i].classList == undefined){
            continue;
        }
        console.log(project.childNodes[i].classList);
        if (project.childNodes[i].classList.contains("overlay-content")) {
            project.childNodes[i].classList.remove("overlay-hide")
          break;
        }        
    }

}


var showOverlay = function() {
    // var attribute = this.getAttribute("data-myattribute");
    // alert(attribute);
    showProjectDetails(this);
    console.log(this)
};

for (var i = 0; i < projectLis.length; i++) {
    projectLis[i].addEventListener('click', showOverlay, false);
}

var projectTitleLis = document.querySelectorAll(".project-navigator li");
for (var i = 0; i < projectTitleLis.length; i++) {
    projectTitleLis[i].addEventListener('click', showOverlayFromTitle, false);
}

