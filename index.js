
var navbar=document.getElementById("navbar");
var sticky=navbar.offsetTop;
function stickyMenu(){
    if (window.pageYOffset >=220){
        navbar.classList.add("sticky")
    }
    else{
        navbar.classList.remove("sticky");
    }
}
window.onscroll=function(){
    stickyMenu();
}

window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
  });
