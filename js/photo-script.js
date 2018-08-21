var photodiv = document.getElementById("photodiv"),
    headerdiv = document.getElementById("headerID"),
    photos = [],
    global_idx = 0,
    amount = 5;

window.onresize = redraw;
createPhotoBlocks();

headerdiv.onclick = () => { headerdiv.classList.toggle("coverblock"); };

function createPhotoBlocks() {
    for (var i = 0; i < 12; i++) {
        var tmpdiv = document.createElement("div");
        tmpdiv.style.width = tmpdiv.style.height = document.documentElement.clientWidth / amount + "px";
        tmpdiv.className = "photoitem";
        var r = getRandomInt(0, 255);
        var g = getRandomInt(0, 255);
        var b = getRandomInt(0, 255);

        tmpdiv.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

        photos.push(tmpdiv);
        photodiv.appendChild(tmpdiv);
        var cover = document.createElement("div");
        cover.className = "coverblock";
        tmpdiv.appendChild(cover);
    }


    photos.map(function(item, index, arr) {
        item.onmouseover = () => {
            item.childNodes[0].classList.add("cover");
        };
        item.onmouseout = () => {
            item.childNodes[0].classList.remove("cover");
        };
        item.onclick = () => { clickfunc(item, index); };
    });
}

function redraw() {
    photos.map(function(item, index, arr) {
        item.style.width = item.style.height = document.documentElement.clientWidth / amount + "px";
    });
}

function clickfunc(item, index) {
    var curtain = document.createElement("div"),
        btns = [],
        photo = document.createElement("div");

    for (var i = 0; i < 3; ++i) {
        var tmpbtn = document.createElement("div");
        btns.push(tmpbtn);
    }
    global_idx = index;
    curtain.className = "curtain";
    document.body.appendChild(curtain);
    btns[0].classList.add("btn", "closebtn");
    btns[0].textContent = "X";
    btns[0].onclick = () => { document.body.removeChild(curtain); };


    photo.className = "bigphoto";
    photo.style.backgroundColor = item.style.backgroundColor;
    curtain.appendChild(photo);


    btns[1].classList.add("btn", "leftbtn");
    btns[2].classList.add("btn", "rightbtn");
    var curridx = index;
    btns[2].onclick = () => { rightclick(photos, photo); };
    btns[1].onclick = () => { leftclick(photos, photo); };

    btns[2].textContent = ">";
    btns[1].textContent = "<";

    btns.map((item, index, arr) => {
        curtain.appendChild(item);
    });

}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rightclick(photos, photo) {
    photo.style.backgroundColor = photos[(++global_idx) % photos.length].style.backgroundColor;
    console.log(global_idx);
}

function leftclick(photos, photo) {
    if (!global_idx) global_idx = photos.length;
    photo.style.backgroundColor = photos[(--global_idx) % photos.length].style.backgroundColor;
}