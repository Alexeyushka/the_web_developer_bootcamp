var todos = ["buy things"]

var answer = prompt("What would you like to do?")
while (answer !== "quit")
{
	if (answer === "new")
	{
		newTodo()
	}
	else if (answer === "list")
	{
		listTodo()
	}
	else if (answer === "delete")
	{
		deleteTodo()
	}
	answer = prompt("what would you like to do?")
}
console.log("ok, thanks, you quit")

function newTodo()
{
	var newTodo = prompt("what to add to todo list?")
	todos.push(newTodo)
}

function listTodo()
{
	var i = 0
	console.log("**********")
	todos.forEach(function(todo, i)
	{
		console.log(i + ": "+ todo)
	}) 
	console.log("**********")
}

function deleteTodo()
{
	var index = prompt("which one would you like to delete?")
	todos.splice(index, 1)
}