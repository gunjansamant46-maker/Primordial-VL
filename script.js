function hideAllIntermediate() {
    document.getElementById("nephron").style.display = "none";
    document.getElementById("genetic").style.display = "none";
    document.getElementById("skeleton").style.display = "none";
}

function showNephron() {
    hideAllIntermediate();
    document.getElementById("nephron").style.display = "block";
}

function showGenetic() {
    hideAllIntermediate();
    document.getElementById("genetic").style.display = "block";
}

function showSkeleton() {
    hideAllIntermediate();
    document.getElementById("skeleton").style.display = "block";
}


function hideAllAdvanced() {
    document.getElementById("demo").style.display = "none";
    document.getElementById("guided").style.display = "none";
    document.getElementById("free").style.display = "none";
}

function showDemo() {
    hideAllAdvanced();
    document.getElementById("demo").style.display = "block";
}

function showGuided() {
    hideAllAdvanced();
    document.getElementById("guided").style.display = "block";
}

function showFree() {
    hideAllAdvanced();
    document.getElementById("free").style.display = "block";
}
