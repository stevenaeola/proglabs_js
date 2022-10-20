const humous = document.getElementById("humous");
const pitta = document.getElementById("pitta");
const halloumi = document.getElementById("halloumi");
const salad = document.getElementById("salad");

humous.addEventListener("click", function(e)
{
    document.getElementById("popup-humous").style.display = "block";
});

pitta.addEventListener("click", function(e)
{
    document.getElementById("popup-pitta").style.display = "block";
});

halloumi.addEventListener("click", function(e)
{
    document.getElementById("popup-halloumi").style.display = "block";
});

salad.addEventListener("click", function(e)
{
    document.getElementById("popup-salad").style.display = "block";
});

