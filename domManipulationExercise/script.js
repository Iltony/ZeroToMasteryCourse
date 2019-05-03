var button = document.getElementById("enter")
var input = document.getElementById("userInput")
var ul = document.querySelector("ul")

function createListElement(){
	var li= document.createElement("li");
		li.appendChild(document.createTextNode(input.value))
		ul.appendChild(li)
		input.value = ""
}

function addListAft	  	erClick() {
	if (input.value.length > 0){
		createListElement()
	}
}

function addListAfterEnter(event) {
	if (input.value.length > 0 and event.keycode === 13){
		createListElement()
	}
}


button.addEventListener("click", addListAfterClick)

input.addEventListener("keypress", addListAfterEnter)