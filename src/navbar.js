
// function openMenu() {
//     if (!$("#menu").hasClass("activeMenu")) {
//         console.log("nao tem class active"); 
//         $("#menu").addClass("activeMenu");
//         $("#mobileButton").addClass("activeButton"); 
//     } else {
//         $("#menu").removeClass("activeMenu");
//         $("#mobileButton").removeClass("activeButton");
//     }
// }


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