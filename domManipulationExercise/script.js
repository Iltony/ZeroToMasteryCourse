var button = document.getElementById("enter")
var input = document.getElementById("userInput")
var ul = document.querySelector("ul")
var listItem = document.querySelectorAll("li")

function createListElement(){
	var li= document.createElement("li");
		li.appendChild(document.createTextNode(input.value))
		ul.appendChild(li)
		input.value = ""
}

function addListAfterClick() {
	if (input.value.length > 0){
		createListElement()
	}
}

function addListAfterEnter(event) {
	if (input.value.length > 0 && event.keycode === 13){
		createListElement()
	}
}

function toggleDoneElement(event) {
	event.target.classList.toggle("done");
}


button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterEnter)

listItem.forEach(x=> x.addEventListener("click", toggleDoneElement))