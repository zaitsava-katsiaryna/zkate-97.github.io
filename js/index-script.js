var linkabout = document.getElementById("aboutdiv"),
    coverabout = document.getElementById("coverabout"),
    linkphotos = document.getElementById("photosdiv"),
    coverabout = document.getElementById("coverphotos"),
    linkabout = document.getElementById("contactsdiv"),
    coverabout = document.getElementById("covecontacts");
console.log(linkabout);
console.log(coverabout);
linkabout.onmouseover = () => { coverabout.style.opacity = 1; }
    // linkabout.onmouseout = () => { coverabout.style.opacity = 0; }