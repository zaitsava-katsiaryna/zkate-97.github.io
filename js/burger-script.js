var burger = document.getElementById("burger"),
    burgericon = document.getElementById("burgericon"),
    cross = document.getElementById("cross"),
    menu_div = document.getElementById("menudiv");

burger.onmouseover = burger_mouseover;
cross.onclick = () => {
    menu_div.style.opacity = 0;
    cross.style.opacity = 0;
    burger.style.opacity = 1;
}

function burger_mouseover() {
    menu_div.style.opacity = 1;
    cross.style.opacity = 1;
    burger.style.opacity = 0;;
}