function showLoginMenu() {
    var w = window.innerWidth;
    document.getElementById("login-menu").style.display = "block";
}
function hideLoginMenu() {
    document.getElementById("login-menu").style.display = "none";
}
var loginButton = document.getElementById("login");
loginButton.addEventListener("click", showLoginMenu);
document.getElementById("login-menu-xout").addEventListener("click", hideLoginMenu);

var patLogin = document.getElementById("patient-login");
var docLogin = document.getElementById("doctor-login");

function blurPage() {
    document.getElementById("container").style.opacity = 0.1;
}

function unBlurPage() {
    document.getElementById("container").style.opacity = 1.0;
}

function displayLoginWindow() {
    blurPage();
    var loginWindow = document.getElementById("login-window");
    loginWindow.style.left = Math.floor((window.innerWidth-400)/2)+"px";
    loginWindow.style.visibility = "visible";
}

patLogin.addEventListener("click", displayLoginWindow);
docLogin.addEventListener("click", displayLoginWindow);

function hideLoginWindow() {
    unBlurPage();
    var loginWindow = document.getElementById("login-window");
    loginWindow.style.left = Math.floor((window.innerWidth-400)/2)+"px";
    loginWindow.style.visibility = "hidden";
}

document.getElementById("login-window-xout").addEventListener("click", function() {
    hideLoginWindow();
});

var loggedIn = false;
var logType = 0;

function addPatLinks() {
    document.getElementById("specificOps").style.visibility = "visible";
    document.getElementById("specificOps").innerHTML = "";
    var links = ["./contact-doc", "./my-history"];
    var names = ["Contact My Doctor", "My History"];
    for (var i = 0; i < 2; i++) {
        var opt = document.createElement("a");
        opt.setAttribute("href", links[i]);
        opt.innerHTML = names[i];
        document.getElementById("specificOps").appendChild(opt);
    }
}

function performLogin() {
    var usn = document.getElementById("usn-input").value;
    var pwd = document.getElementById("pwd-input").value;
    console.log(usn);
    if (usn === "patient") {
        addPatLinks();
    }
    loggedIn = true;
}

document.getElementById("login-submit").addEventListener("click", function() {performLogin();hideLoginWindow();hideLoginMenu();});
