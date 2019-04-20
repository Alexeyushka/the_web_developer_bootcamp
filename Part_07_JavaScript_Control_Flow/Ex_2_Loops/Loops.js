console.log("hi")

var i = 10

while (i <= 40)
{
	console.log(i)
	i++;
}

for (var index = 10; index <= 40; index = index + 2) 
{
	console.log(index)
}

i = 300
while (i <= 333)
{
	if(i % 2 == 1)
	{
		console.log(i)
	}
	i++;
}

for (var i = 5; i <= 50; i++) 
{
	if(i % 5 == 0 && i % 3 == 0)
	{
		console.log(i)
	}
}