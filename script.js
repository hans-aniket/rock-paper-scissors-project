function getComputerChoice( _string1, _string2, _string3)
{
    let randomValue = Math.random()
    console.log("computer's choice")
    if (randomValue <= 0.4)
    {
        console.log(_string1)
        return _string1;
    }
    else if (randomValue >= 0.7)
    {
        console.log(_string2)
        return _string2;
    }
    else {
        console.log(_string3)
        return _string3;
    }

}
let _string1 = "rock";
let _string2 = "paper";
let _string3 = "scissors";
getComputerChoice(_string1, _string2, _string3);

function getHumanChoice(_string1, _string2, _string3)
{
    let yourChoice = prompt("choose:rock,paper or scissors");

    if (yourChoice.toLowerCase() == "rock")
    {
        alert("you chose rock")
        return "rock";
    }
    else if (yourChoice.toLowerCase() == "paper")
    {
        alert("you chose paper")
        return "paper";
    }
    else if (yourChoice.toLowerCase() == "scissors")
    {
        alert("you chose scissors")
        return "scissors";
    }
    else {
        alert("invalid input")
    }
    return getHumanChoice()
}
getHumanChoice()

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == _string1) {
        console.log("both chose rock, nobody won")
    }
    else if (humanChoice == "rock" && computerChoice == _string2) {
        console.log("you chose rock and computer chose paper so, you lose and computer wins")
        console.log(`your score = ${humanScore} and computer's score = ${++computerScore}`)
    }
    else if (humanChoice == "rock" && computerChoice == _string3) {
        console.log("you chose rock and computer chose scissors so, you won")
        console.log(`your score = ${++humanScore} and computer's score = ${computerScore}`)
    }
    else if (humanChoice == "paper" && computerChoice == _string1) {
        console.log("you chose paper and computer chose rock so, you won")
        console.log(`your score = ${++humanScore} and computer's score = ${computerScore}`)
    }
    else if (humanChoice == "paper" && computerChoice == _string2) {
        console.log("both chose paper, nobody won")
    }
    else if (humanChoice == "paper" && computerChoice == _string3) {
        console.log("you chose paper and computer chose scissors so, you lose and computer won")
        console.log(`your score = ${humanScore} and computer's score = ${++computerScore}`)
    }
    else if (humanChoice == "scissors" && computerChoice == _string1){
        console.log("you chose scissors and computer chose rock so, you lose and computer won")
        console.log(`your score = ${humanScore} and computer's score = ${++computerScore}`)
    }
    else if (humanChoice == "scissors" && computerChoice == _string2){
        console.log("you chose scissors and computer chose paper so, you won and computer lose")
        console.log(`your score = ${++humanScore} and computer's score = ${computerScore}`)
    }
    else if (humanChoice == "scissors" && computerChoice == _string3){
        console.log("both chose scissors, nobody won")
    }

    
}
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice(_string1,_string2,_string3);
  
  playRound(humanSelection, computerSelection);
  