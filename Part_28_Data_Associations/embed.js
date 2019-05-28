var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo", {useNewUrlParser: true});

//POST - title, content
var postSchema = new mongoose.Schema({
	title: String,
	content: String
});

var postModel = mongoose.model("Post", postSchema);


//USER - email, name
var userSchema = new mongoose.Schema({
	email: String,
	name: String,
	posts: [postSchema]
});

var User = mongoose.model("User", userSchema);

//create a newUser
var newUser = new User({
	email: "hermione@ya.ru",
	name: "Harry Pooter"
});

//create a post for a newUser
newUser.posts.push({
	title: "How to do portions",
	content: "pushes content here"
});

//savea post for newUser
newUser.save(function(err, user){
	if(err){
		concole.log(err);
	} else {
		console.log(user);
	}
});

//create a newPost
var newPost = new postModel({
	title: "this is a great story",
	content: "blah blah blah interesting super"
});

//save a newPost
newPost.save(function(err, post){
	if (err){
		console.log(err);
	} else {
		console.log(post);
	}
});


//find a user in a database and add a post to this user
User.findOne({name: "Harry Pooter"}, function(err, user){
	if (err){
		//console.log(err);
	} else {
		user.posts.push({
			title: "3 things to know",
			content: "Voldemort voldemort"
		});
		user.save(function(err, user){
			if(err){
				console.log(err);
			} else {
				console.log(user);
			}
		});
	}
});
