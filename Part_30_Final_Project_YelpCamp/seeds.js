var mongoose 	= require("mongoose");
var Campground 	= require("./models/campgrounds");
var Comment 	= require("./models/comment");

// var data = [
// 	{
// 		name: "Cloud's Rest", 
// 		image: "http://ladybugforgirls.org/wp-content/uploads/2018/05/Camping.jpg",
// 		description: "разцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."
// 	},
// 	{Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки об
// 		name: "Desert Maisa", 
// 		image: "https://tinyurl.com/yypfz5nz",
// 		description: "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."
// 	},
// 	{
// 		name: "Canion Floor", 
// 		image: "http://ladybugforgirls.org/wp-content/uploads/2018/05/Camping.jpg",
// 		description: "Lorem Ipsum - это текст-рыба, часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной рыбой для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum."
// 	}
// ];

function seedDB(){
	//remove campgrounds
	Campground.remove({}, function(err){
		if (err){
			console.log(err);
		}
		console.log("removed campgrounds");
		Comment.remove({}, function(err){
			if (err){
				console.log(err);
			} else {
				console.log("Comments removed");
			}
		//add a few campgrounds
			data.forEach(function(seed){
				Campground.create(seed, function(err, campground){
					if (err){
						console.log(err);
					} else {
						console.log("added campground");
						// create comment for each campground
						Comment.create(
							{
								text: "This place is great",
								author: "Homer"
							}, function(err, comment){
								if (err){
									console.log(err);
								} else {
								campground.comments.push(comment);
								campground.save();
								console.log("post created");
							}
						});
					}
				});
			});
		});
	});
}


module.exports = seedDB;