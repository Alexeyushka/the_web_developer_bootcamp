function average(arr)
{
	var i = 0;
	var sum = 0;
	
	while (i < arr.length)
		{
			sum = sum + arr[i];
			i++;
		}
	sum = sum / arr.length;
	console.log(Math.round(sum));
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);