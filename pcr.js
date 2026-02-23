function showDemo() {
document.getElementById("demo").style.display = "block";
document.getElementById("guided").style.display = "none";
document.getElementById("free").style.display = "none";
}

function showGuided() {
document.getElementById("demo").style.display = "none";
document.getElementById("guided").style.display = "block";
document.getElementById("free").style.display = "none";
}

function showFree() {
document.getElementById("demo").style.display = "none";
document.getElementById("guided").style.display = "none";
document.getElementById("free").style.display = "block";
}
function hideAll() {
    document.getElementById("nephron").style.display = "none";
    document.getElementById("genetic").style.display = "none";
    document.getElementById("skeleton").style.display = "none";
}

function showNephron() {
    hideAll();
    document.getElementById("nephron").style.display = "block";
}

function showGenetic() {
    hideAll();
    document.getElementById("genetic").style.display = "block";
}

function showSkeleton() {
    hideAll();
    document.getElementById("skeleton").style.display = "block";
}
