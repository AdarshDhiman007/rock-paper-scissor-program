const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach((possibleChoice) => {possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
})})

function generateComputerChoice(){
  const randomNumber = Math.floor(Math.random() * 3 + 1)
  
  if(randomNumber == 1) {
    computerChoice = 'rock'
    
  }
  if(randomNumber == 2) {
    computerChoice = 'paper'
    
  }
  if(randomNumber == 3) {
    computerChoice = 'scissor'
    
  }

  computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
  if(computerChoice == userChoice) {
    resultDisplay.innerHTML = 'Its a draw'
  }
  if(computerChoice == 'scissor' && userChoice == 'paper') {
    resultDisplay.innerHTML = 'You lose'
  }
  if(computerChoice == 'paper' && userChoice == 'rock') {
    resultDisplay.innerHTML = 'You lose'
  }
  if(computerChoice == 'rock' && userChoice == 'scissor') {
    resultDisplay.innerHTML = 'You lose'
  }
  if(computerChoice == 'rock' && userChoice == 'paper') {
    resultDisplay.innerHTML = 'You win'
  }
  if(computerChoice == 'scissor' && userChoice == 'rock') {
    resultDisplay.innerHTML = 'You win'
  }
  if(computerChoice == 'paper' && userChoice == 'scissor') {
    resultDisplay.innerHTML = 'You win'
  }
}

