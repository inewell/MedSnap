var doctorPic = document.getElementById("bg-pic");
doctorPic.setAttribute("width", window.innerWidth + "px");
window.addEventListener("resize", function() {
doctorPic.setAttribute("width", window.innerWidth+"px");
});