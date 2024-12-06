const playerName = prompt("Введіть своє ім’я:", "Гравець");
const playerNameElement = document.getElementById("player-name");
const playerScoreElement = document.getElementById("player-score");
const playerNumElement = document.getElementById("player-num");
const compNameElement = document.getElementById("comp-name");
const compScoreElement = document.getElementById("comp-score");
const compNumElement = document.getElementById("comp-num");

playerNameElement.textContent = playerName;

let playerScore = 0;
let compScore = 0;

function playRound() {
    const playerNum = Math.floor(Math.random() * 10)
    const compNum = Math.floor(Math.random() * 10)

    playerNumElement.textContent = playerNum;
    compNumElement.textContent = compNum;

    if (playerNum > compNum) {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (compNum > playerNum) {
        compScore++;
        compScoreElement.textContent = compScore;
    }
    if (playerScore === 3 || compScore === 3) {
        const winner = playerScore === 3 ? playerName : "Comp";
        alert(`Гра завершена! Переможець: ${winner}`);
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    compScore = 0;
    playerScoreElement.textContent = 0;
    compScoreElement.textContent = 0;
    playerNumElement.textContent = 0;
    compNumElement.textContent = 0;
}