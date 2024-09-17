const input = document.getElementById("input-box");
const shoppingList = document.getElementById("ul");
const shoppingListButton = document.getElementById("but1");
const recipe = document.getElementById("ol");
const recipeButton = document.getElementById("but2");

shoppingListButton.addEventListener("click", function () {
	if (!input.value == "") {
		let li = document.createElement("li");
		let text = document.createTextNode(input.value);

		li.appendChild(text);
		li.classList.add("list-item");
		shoppingList.appendChild(li);

		input.value = "";

		eventListners();
	}
});

recipeButton.addEventListener("click", function () {
	if (!input.value == "") {
		const li = document.createElement("li");
		const text = document.createTextNode(input.value);

		li.appendChild(text);
		li.classList.add("list-item");
		recipe.appendChild(li);

		input.value = "";

		eventListners();
	}
});

function eventListners() {
	listItems = document.querySelectorAll(".list-item");
	listItems.forEach((e) => {
		e.addEventListener("click", function () {
			e.remove();
		});
	});
}
