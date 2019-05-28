var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.send("Hi there! Welcome to my assignment!");	
});

app.get("/speak/:animal", function(req, res){
	var animal = req.params.animal.toLowerCase();
	var sounds = {
		pig: "Oink",
		cow: "Moo",
		dog: "Woof",
		cat: "Meow"
	};
	var say = sounds[animal];
	res.send("The " + animal + " says " + say);
});

app.get("/repeat/:multiple/:multiplier", function(req, res){
	var multiple = req.params.multiple;
	var multiplier = req.params.multiplier;
	var string = "";
	if (multiplier > 0)
	{	
		while (multiplier > 0)
		{
			string = string + " " + multiple;
			multiplier--;
		}
		res.send(string);
	}
	else
		res.send("multiple is less than 1, please try one more time!");
});

app.get("*", function(req, res){
	res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(3000, function(){
	console.log("server started");
});