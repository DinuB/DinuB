
function openMenu() {
    if (!$("#menu").hasClass("activeMenu")) {
        console.log("nao tem class active"); 
        $("#menu").addClass("activeMenu");
        $("#mobileButton").addClass("activeButton"); 
    } else {
        $("#menu").removeClass("activeMenu");
        $("#mobileButton").removeClass("activeButton");
    }
}