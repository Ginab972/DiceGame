let player1Score = 0;
let player2Score = 0;
let player1Turn = true;
let name1 = "Player 1";
let name2 = "Player 2";


const Player1Dice = document.getElementById("player1Dice")
const Player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")
const players = document.getElementsByClassName('players')[0];



let p1 = document.getElementById("p1")
let p2 = document.getElementById('p2')
let flyingCow = document.getElementById('flyingCow');
const butn = document.getElementById("butn")
const player1wins = new Audio("audio/player1wins.mp3")
const player2wins = new Audio("audio/player2wins.mp3")
const weee = new Audio("audio/weee.mp3")
const diceSound = new Audio("audio/dice.mp3")


function editNames() {
    player1 = prompt("Enter Player 1 Name");
    player2 = prompt("Enter Player 2 Name");

    document.querySelector("p.Player1").textContent = player1;
    document.querySelector("p.Player2").textContent = player2;
    butn.style.display = "none"
    rollBtn.style.display = "block"
    message.textContent = `${player1}'s Turn`
}

function gameOver() {
    weee.play()
    const flyingCowClone = flyingCow.cloneNode();
    flyingCow.remove();
    flyingCow = flyingCowClone;
    flyingCow.style.display = 'block';
    players.appendChild(flyingCow);
    rollBtn.style.display = "none"
    butn.style.display = "none"
    resetBtn.style.display = "block"

}

function showDisplayButton() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}



rollBtn.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 6) + 1
    diceSound.play()
    diceSound.currentTime = 0;


    if (player1Turn) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = randomNumber
        player1Dice.classList.remove("active")
        player2Dice.classList.add("active")
        message.textContent = `${player2}'s Turn`
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        player2Dice.textContent = randomNumber
        player2Dice.classList.remove("active")
        player1Dice.classList.add("active")
        message.textContent = `${player1}'s Turn`

    }

    if (player1Score >= 21) {

        message.textContent = `${player1} Won 🥳`


        player1wins.play()
        gameOver()
        showDisplayButton()

    } else if (player2Score >= 21) {
        message.textContent = `${player2} Won 🎉`
        player2wins.play()
        gameOver()
        showDisplayButton()
    }
    player1Turn = !player1Turn
})

resetBtn.addEventListener("click", function() {
    reset()

})

function reset() {
    p1.textContent = " - "
    p2.textContent = "- "
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = '-'
    player2Dice.textContent = '-'
    player1Score = 0
    player2Score = 0
    player1Turn = true
    resetBtn.style.display = "none"
    rollBtn.style.display = "none"
    butn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
    message.textContent = ""
    flyingCow.style.display = "none";
}