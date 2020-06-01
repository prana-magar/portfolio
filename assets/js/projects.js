

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

var showOverlay = function() {
    // var attribute = this.getAttribute("data-myattribute");
    // alert(attribute);
    document.getElementById("project-overlay").classList.add("overlay-show")
    for (var i = 0; i < this.childNodes.length; i++) {
        console.log(this.childNodes[i])
        if(this.childNodes[i].classList == undefined){
            continue;
        }
        console.log(this.childNodes[i].classList);
        if (this.childNodes[i].classList.contains("overlay-content")) {
            this.childNodes[i].classList.remove("overlay-hide")
          break;
        }        
    }
    console.log(this)
};

for (var i = 0; i < projectLis.length; i++) {
    projectLis[i].addEventListener('click', showOverlay, false);
}
