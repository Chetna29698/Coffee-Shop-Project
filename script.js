// ------------------------------about img-------------------------------
document.getElementById("img").addEventListener("mouseover", zoomin)

function zoomin() {
    let element = document.getElementById("img")
    element.style.transform = "scale(1.1)"
    // element.style.transition = "all 5s liner";
}

document.getElementById("img").addEventListener("mouseleave", zoomout)

function zoomout() {
    let element = document.getElementById("img")
    element.style.transform = "scale(1)"
    // element.style.transition = "all 5s liner";
}

// -------------------------------service div------------------------------------


