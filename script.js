const defaultValues = 0;
const playerScore = document.getElementById('playerScores');
const botScore = document.getElementById('BotScores');
const roundCount = document.getElementById('roundCount');
const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const title = document.getElementById('title');
const resetBot = document.getElementById('resetBot');

let playerScoreCounter = 0;
let botScoreCounter = 0;
let roundCounter = 0;

playerRock.addEventListener('click', function(){
    game("Rock", computerPlay());
    fiveGames();
})

playerPaper.addEventListener('click', function(){
    game("Paper", computerPlay());
    fiveGames();
})

playerScissors.addEventListener('click', function(){
    game("Scissors", computerPlay());
    fiveGames();
})

resetBot.addEventListener('click', function(){
    resetGame();
})

function computerPlay() {
    const rps = ["Rock", "Paper", "Scissors"];
    let randomNumer = Math.floor(Math.random() * 3);
    let result = rps[randomNumer];

    return result;
} 

function game(playerSelection, botSelection) {
    if (playerSelection === "Rock") {
        if (botSelection === "Scissors") {
            playerScoreCounter++;
            roundCounter++;
            playerScore.textContent = playerScoreCounter;
            roundCount.textContent = roundCounter;
            title.textContent = "ONE POINT FOR YOU! WELL DONE"
            console.log(botSelection);
            console.log("You win");
        } else if (botSelection === "Paper") {
            botScoreCounter++;
            roundCounter++;
            botScore.textContent = botScoreCounter;
            roundCount.textContent = roundCounter;
            title.textContent = "BOT BEATS YOU ASS!! GET IT BACK!"
            console.log(botSelection);
            console.log("You lose");
        } else if (botSelection === "Rock") {
            roundCounter++;
            roundCount.textContent = roundCounter;
            title.textContent = "TIE!!!!"
            console.log(botSelection);
            console.log("Tie");
        }
    };

    if (playerSelection === "Paper") {
        if (botSelection === "Rock") {
            playerScoreCounter++;
            roundCounter++;
            playerScore.textContent = playerScoreCounter;
            roundCount.textContent = roundCounter;
            title.textContent = "NICE JOB, KEEP ON GOING"
            console.log(botSelection);
            console.log("You win");
        } else if (botSelection === "Scissors") {
            botScoreCounter++;
            roundCounter++;
            botScore.textContent = botScoreCounter;
            roundCount.textContent = roundCounter;
            title.textContent = "BOT JUST BEATS YOU ASS!! COME ONE!"
            console.log(botSelection);
            console.log("You lose");
        } else if (botSelection === "Paper") {
            roundCounter++;
            roundCount.textContent = roundCounter;
            title.textContent = "TIE!!!"
            console.log(botSelection);
            console.log("Tie");
        }
    }; 
    
    if (playerSelection === "Scissors") {
        if (botSelection === "Paper") {
            playerScoreCounter++;
            roundCounter++;
            playerScore.textContent = playerScoreCounter;
            roundCount.textContent = roundCounter;
            title.textContent = "PERFECT!!"
            console.log(botSelection);
            console.log("You win");   
        } else if (botSelection === "Rock") {
            botScoreCounter++;
            roundCounter++;
            botScore.textContent = botScoreCounter;
            roundCount.textContent = roundCounter;
            title.textContent = "LOOKS LIKE HE'S SMARTER THAN YOU!"
            console.log(botSelection);
            console.log("You lose");
        } else if (botSelection === "Scissors") {
            roundCounter++;
            roundCount.textContent = roundCounter;
            title.textContent = "TIE!!!!"
            console.log(botSelection);
            console.log("Tie");
        }
    };
}

function resetGame() {
    playerScore.textContent = defaultValues;
    botScore.textContent = defaultValues;
    roundCount.textContent = defaultValues;
    roundCounter = defaultValues;
    playerScoreCounter = defaultValues;
    botScoreCounter = defaultValues;
    title.textContent = "READY TO PLAY?? TAKE YOUR PICK!!"
}

function fiveGames() {
    if (playerScoreCounter == 3) {
        let playerFinalScore = playerScoreCounter;
        let botFinalScore = botScoreCounter;
        resetGame();
        title.textContent = `YOU JUST WON THE GAME! ${playerFinalScore}:${botFinalScore}`;
    } else if (botScoreCounter == 3) {
        let playerFinalScore = playerScoreCounter;
        let botFinalScore = botScoreCounter;
        resetGame();
        title.textContent = `SHAME ON YOU!! ${playerFinalScore}:${botFinalScore}`;
    }
}
