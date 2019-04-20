var firstScore = document.querySelector("#firstScore");
var secondScore = document.querySelector("#secondScore");
var p1Score = 0;
var p2Score = 0;
var p1 = document.querySelector("#p1");
var p2 = document.querySelector("#p2");
var finalScore = document.querySelector("#finalScore");
var newGame = document.querySelector("#new_game");
var winningScoreDisplay = document.querySelector("#FS")
var numInput = document.querySelector("input");
var WinningScore = 0;
var gameOver = 0;

new_game.addEventListener("click", function(){
	p1Score = 0;
	p2Score = 0;
	winningScoreDisplay.value = "0";
	firstScore.textContent = p1Score;
	firstScore.classList.remove("winner");
	firstScore.classList.remove("loser");
	secondScore.textContent = p2Score;
	secondScore.classList.remove("winner");
	secondScore.classList.remove("loser");
	gameOver = 0;
})

//finalScore.textContent = finalScore

p1.addEventListener("click", function(){
	if (gameOver == 0)
	{
		p1Score++;
		firstScore.textContent = p1Score;
		if (p1Score == winningScore)
		{
			firstScore.classList.add("winner");
			secondScore.classList.add("loser")
			gameOver = 1;
		}
	}
	else
		p1Score = p1Score;
});

p2.addEventListener("click", function(){
	if (gameOver == 0)
	{
		p2Score++;
		secondScore.textContent = p2Score;
		if (p2Score == winningScore)
		{
			secondScore.classList.add("winner");
			firstScore.classList.add("loser")
			gameOver = 1;
		}
	}
	else
		p2Score = p2Score;
});

numInput.addEventListener("change", function(){
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
})