console.log("hi")

var age = prompt("How old are you?")

if(age < 0)
{
	console.log("error")
}

if(age == 21)
{
	console.log("Happy 21st birthday!")
}

if(age % 2 == 1)
{
	console.log("your age is odd")
}

if(age % Math.sqrt(age) === 0)
{
	console.log("perfect square")
}