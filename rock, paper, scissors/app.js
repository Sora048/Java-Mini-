const computerChoice = document.getElementById("computer-choice")
const yourChoice = document.getElementById("user-choice")
const resultDisplay = document.getElementById("game-result")
const possibleChoice = document.querySelectorAll("button")

let yourDisplay
let computerDisplay
let result

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    yourDisplay = e.target.id
    yourChoice.innerHTML = yourDisplay

    generateComputerChoice()
    gameResult()

}))

function generateComputerChoice(){
    const randomHand = Math.floor(Math.random() * 3) + 1
    
    if(randomHand === 1){
        computerDisplay = "rock"
    }
    if(randomHand === 2){
        computerDisplay = "paper"
    }
    if(randomHand === 3){
        computerDisplay = "scissors"
    }

    computerChoice.textContent = computerDisplay
   
}

function gameResult(){
    if(computerDisplay === yourDisplay){
        result = "Draw, Try again!"
    }
    if(computerDisplay === "rock" && yourDisplay === "paper"){
        result = "You Win!"
    }
    if(computerDisplay === "paper" && yourDisplay === "rock"){
        result = "You Lose!"
    }
    if(computerDisplay === "rock" && yourDisplay === "scissors"){
        result = "You Lose!"
    }
    if(computerDisplay === "paper" && yourDisplay === "scissors"){
        result = "You Win!"
    }
    if(computerDisplay === "scissors" && yourDisplay === "rock"){
        result = "You Win!"
    }
    if(computerDisplay === "scissors" && yourDisplay === "paper"){
        result = "You Lose!"
    }

    console.log(result)
    // resultDisplay.textContent = result //it can't display the result on my computer probably yours will
}
