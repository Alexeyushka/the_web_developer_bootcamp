var express = require("express");
var app = express();

// "/" root
app.get("/", function(req, res){
	res.send("Hi there!");
});

// "/bye"
app.get("/bye", function(req, res){
	res.send("goodbye");
});

// "/dog"
app.get("/dog", function(req, res){
	res.send("Meow!");
});

app.get("/r/:subredditName", function(req, res){
	var subreddit = req.params.subredditName;
	res.send("welcome to " + subreddit + " subreddit");
});

app.get("*", function(req, res){
	res.send("page not foung 404");
});

app.listen(3000, function(){
	console.log("server started");
});