// Player One
var p1Button = document.querySelector("#p1");
var p1Display = document.querySelector("#p1Display");
var p1Score = 0;

// Player Two
var p2Button = document.querySelector("#p2");
var p2Display = document.querySelector("#p2Display");
var p2Score = 0;

// Game Setup
var numInput = document.querySelector("input[type='number']")
var scoreDisplay = document.querySelector("#score");
var resetButton = document.querySelector("#reset");
var winningScore = 5;
var gameover = false;

numInput.value = winningScore;

// Score input
numInput.addEventListener("change", function(){
    scoreDisplay.textContent = this.value;
    winningScore = Number(this.value);
    resetGame();
});

// Player 1 button
p1Button.addEventListener("click", function(){
    if(!gameover){
        p1Score++;
        if(p1Score === winningScore){
            gameover = true;
            p1Display.classList.toggle("winner");
        }
        p1Display.textContent = p1Score;
    }
});

// Player 2 button
p2Button.addEventListener("click", function(){
    if(!gameover){
        p2Score++;
        if(p2Score === winningScore){
            gameover = true;
            p2Display.classList.toggle("winner");
        }
        p2Display.textContent = p2Score;
    }
});

// Reset button
resetButton.addEventListener("click", resetGame);

function resetGame() {
    // Player One Reset
    p1Score = 0;
    p1Display.textContent = p1Score;
    p1Display.classList.remove("winner");

    // Player Two Reset
    p2Score = 0;
    p2Display.textContent = p2Score;
    p2Display.classList.remove("winner");
    
    // Game Reset
    gameover = false;
}