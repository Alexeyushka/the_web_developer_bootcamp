console.log("connected")

function printReverse(array)
{
	var i = 0
	while (i <= array.length)
	{
		console.log(array[array.length - i])
		i++
	}
}

printReverse([1, 2, 3, 4])

function isUniform(arr)
{
	var i = 0
	console.log(arr.length)
	while (i <= arr.length - 2)
	{
		if (arr[i] == arr[i + 1])
			i++;
			
		else
		{
			console.log("false")
			return (false)
		}
	}
	console.log("true")
	return (true)
}

isUniform([1, 1, 1, 1])

function sumArray(arra)
{
	var i = 0
	var result = 0
	while (i <= arra.length - 1)
	{
		result = result + arra[i]
		i++;
	}
	console.log(result)
}

sumArray([1, 4, 3,])

function max(array)
{
	var i = 0
	var max = 0
	while (i <= array.length - 1)
	{
		if (array[i] > max)
		{
			max = array[i]
		}
		i++
	}
	console.log(max)
}

max([1, 5, 3, 28, 14])