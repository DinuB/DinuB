// navbar content
document.getElementById("navbar").innerHTML = `
                <div id="navbarContent">
                <div id="rightNavbar">
                <div id="logo">
                    Dinu_B
                </div>
                <div id="mobileButton" onclick="openMenu()">
                    <i class="fa fa-bars"></i>
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
var menuButton = document.getElementById("mobileButton")

function openMenu() {
    if (!menu.classList.contains("activeMenu")) {
        menu.classList.add("activeMenu")
        menuButton.classList.add("activeButton"); 
    } else {
        menu.classList.remove("activeMenu")
        menuButton.classList.remove("activeButton"); 
    }
}

