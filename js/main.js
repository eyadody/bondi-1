var button= document.getElementById("navbar-toggler");
var shownav= document.getElementById("main");

button.onclick= function(){
    if(shownav.classList.contains("show")){
        shownav.classList.remove("show")
    }else{
        shownav.classList.add("show");
    }
}