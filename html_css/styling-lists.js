window.onload = () => {
    const button = document.getElementById("navbar-button"); 
    const content = document.getElementById("navbar-content");
    button.onclick = () => {
        if (content.style.display == "") {
            content.style.display = "block";
        } else {
            content.style.display = "";
        }
    };
};
