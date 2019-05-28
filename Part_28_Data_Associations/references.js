var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/blog_demo_2", {useNewUrlParser: true});

var Post = require("./models/post");
var User = require("./models/users");

// Create User
// User.create({
// 	email: "bob@pol.ru",
// 	name: "Bob Belcher"
// });

//Create a post and add its ID to Data  Base
//========================
Post.create({
	title: "how to cook the best burger part 4",
	content: "second content post"
}, function(err, post){
	if (err){
		console.log(err);
	} else {
		User.findOne({email: "bob@pol.ru"}, function(err, foundUser){
			if (err){
				console.log(err);
			} else {
				foundUser.posts.push(post);
				foundUser.save(function(err, data){
					if (err){
						console.log(err);
					} else {
						console.log(data);
					}
				});
			}
		});
	}
});

User.findOne({email: "bob@pol.ru"}).populate("posts").exec(function(err, user){
	if(err){
		console.log(err);
	} else {
		console.log(user);
	}
});