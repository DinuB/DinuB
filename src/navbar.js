// navbar content
document.getElementById("navbar").innerHTML = `
                <div id="navbarContent">
                <div id="rightNavbar">
                <div id="logo">
                    Dinu_B
                </div>
                <div id="mobileButton" onclick="openMenu()">
                    <i id="openMenuIcon" class="fa fa-bars"></i>
                    <i id="closeMenuIcon" class="fa fa-times"></i>
                </div>
                </div>
                <div id="menu">
                <div id="menuLinks">
                    <a href="" class="menuLink">home</a>
                    <a href="" class="menuLink">< /code ></a>
                </div>
                <div id="social">
                    <a href="https://www.linkedin.com/in/dinubuzut/" target="_blank" class="fab fa-linkedin-in socialItem"></a>
                    <a href="https://github.com/DinuB" target="_blank" class="fab fa-github socialItem"></a>
                </div>
                </div>
                </div>
`

// navbar functions
var menu = document.getElementById("menu");
var menuButton = document.getElementById("mobileButton");
var closeMenuIcon = document.getElementById("closeMenuIcon");
var openMenuIcon = document.getElementById("openMenuIcon");

closeMenuIcon.style.display = "none";

function openMenu() {
    if (!menu.classList.contains("activeMenu")) {
        menu.classList.add("activeMenu")
        menuButton.classList.add("activeButton"); 
        openMenuIcon.style.display = "none";
        closeMenuIcon.style.display = "block";
    } else {
        menu.classList.remove("activeMenu")
        menuButton.classList.remove("activeButton");
        openMenuIcon.style.display = "block";
        closeMenuIcon.style.display = "none"; 
    }
};

document.body.onscroll = function(){
    if (menu.classList.contains("activeMenu")) {
        menu.classList.remove("activeMenu")
        menuButton.classList.remove("activeButton");
        openMenuIcon.style.display = "block";
        closeMenuIcon.style.display = "none"; 
    }
};