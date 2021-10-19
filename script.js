function loadEvent() {
    console.log("Az oldal betöltödött.");
    document.getElementById("root").classList.add("loaded");
}

window.addEventListener("load", loadEvent);