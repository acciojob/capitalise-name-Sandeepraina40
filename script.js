function uppercase() {
	const nameInput = document.getElementById("fname");
	nameInput.value = nameInput.value.toUpperCase();
}

document.getElementById("fname").addEventListener("blur", uppercase);