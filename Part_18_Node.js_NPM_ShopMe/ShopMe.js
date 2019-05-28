var faker = require("faker");

var randomName = faker.name.findName(); // Rowan Nikolaus
var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
var randomCard = faker.helpers.createCard(); // random contact card containing many properties

console.log("======================")
console.log("==Welcome to my shop==")
console.log("======================")
var i = 0;
	while (i < 10)
	{	
		console.log(faker.fake("{{commerce.productName}} - ${{commerce.price}}"));
		i++;
	}
console.log(faker.commerce.productName() + "-" + " $" + faker.commerce.price());