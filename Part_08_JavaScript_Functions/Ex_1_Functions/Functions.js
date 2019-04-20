console.log("hi")

function isEven(a)
{
	if(a % 2 == 0)
	{
		console.log("true")
		return (true)
	}
	else
	{
		console.log("false")
		return (false)
	}
}

isEven(4)
isEven(5)
isEven(55)
isEven(1002)

function factorial(a)
{
	var i = 1
	var result = 1
	while (i <= a)
	{
		result = result * i
		i++
	}
	console.log(result)
}

factorial(3)
factorial(4)
factorial(0)

function kebabToSnake(str)
{
	var string2 = str.replace("-" , "_")
	
	console.log(string2)
}

kebabToSnake("Hello-world")