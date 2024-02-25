const DECAY_RATE = 0.9
let intervalID = -1

function decay() {
    let root = document.querySelector(":root");
    let styleSheet = getComputedStyle(root);

    let value = parseFloat(styleSheet.getPropertyValue("--billOpacity")) * DECAY_RATE;
    root.style.setProperty("--billOpacity", `${value}`);
}

function goodNamesAreHard() {
    let root = document.querySelector(":root")

    root.style.setProperty("--billOpacity", "1")
}

function onLoad() {
    let button = document.getElementById("squeeze");
    button.addEventListener("click", goodNamesAreHard);
    
    // Every 50ms
    intervalID = window.setInterval(decay, 50);
}

document.addEventListener("DOMContentLoaded", onLoad);