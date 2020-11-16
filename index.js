function createButton() {
    var btn = document.createElement("BUTTON");
    document.body.appendChild(btn);
	return function (newText) {
    	btn.innerText = newText;
    }
}

var buttonUpdateTextFunction = createButton();
buttonUpdateTextFunction("1");
buttonUpdateTextFunction("2");
