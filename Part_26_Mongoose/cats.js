var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/cat_app", {useNewUrlParser: true});


var catSchema = new mongoose.Schema({
	name: String,
	age: Number,
	temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//adding a new cat to the DB

// var george = new Cat({
// 	name: "Mrs. Norris",
// 	age: 7,
// 	temperament: "Evil"
// });

// george.save(function(err, cat){
// 	if(err){
// 		console.log("error");
// 	} else {
// 		console.log("cat saved to DB");
// 		console.log(cat);
// 	}
// });

//another way of creating new cat
Cat.create({
	name: "Wayme",
	age: 30,
	temperament: "Kille"
}, function(err, cat){
	if (err){
		console.log(err);
	} else {
		console.log("new cat created:");
		console.log(cat);
	}
});

//retrieve all cats from DB and console.log each one
Cat.find({}, function(err, cats){
	if (err){
		console.log("error");
		console.log(err);
	} else {
		console.log("ALL THE CATS:");
		console.log(cats);
	}
});
