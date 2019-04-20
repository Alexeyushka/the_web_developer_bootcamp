console.log("connected");

var backgroundColor = 0
var body = document.querySelector("body");
var button = document.querySelector("button")

button.addEventListener("click", function(){
	if (backgroundColor == 0)
	{
		body.style.background = "orange";
		backgroundColor = 1;
	}
	else
	{
		body.style.background = "white";
		backgroundColor = 0;
	}
})


