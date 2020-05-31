



var navToggle = document.getElementById("nav-toggle")
navToggle.addEventListener("click", function(){
    var imgSrc = navToggle.src;
    if (imgSrc.indexOf('hamburger.svg')!=-1) {
        navToggle.src  = 'assets/icons/close.svg';
        document.getElementById("overlay-div").classList.remove("close")
        document.getElementById("overlay-div").classList.add("open")
        document.getElementById("nav-div").classList.remove("close")
        document.getElementById("nav-div").classList.add("open")

    }
     else {
        navToggle.src  = 'assets/icons/hamburger.svg';
        document.getElementById("overlay-div").classList.remove("open")
        document.getElementById("overlay-div").classList.add("close")
        document.getElementById("nav-div").classList.remove("open")
        document.getElementById("nav-div").classList.add("close")
 

   }

    
   

});


