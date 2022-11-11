function onEnterOfForm() {
    var email = document.getElementById("email");
    var name = document.getElementById("name");
    print(email + " is the email for " + name);
    document.getElementById("submitButton").innerHTML = "Button Clicked. Enter another recipe?";


}
