const showMobileNav = () => {
    var x = document.getElementById("responsive-nav");
    var y = document.getElementById("hero")
    if (x.className === "mobile-nav"){
        x.className += " responsive";
        y.className += " mobile"
    }
    else {
        x.className = "mobile-nav"
        y.className = "wrapper"
    }
}