function getComputerChoice( _string1, _string2, _string3)
{
    let randomValue = Math.random()
    console.log("computer's choice")
    if (randomValue <= 0.4)
    {
        console.log(_string1)
    }
    else if (randomValue >= 0.7)
    {
        console.log(_string2)
    }
    else {
        console.log(_string3)
    }

}
let _string1 = "rock";
let _string2 = "paper";
let _string3 = "scissors";
getComputerChoice(_string1,_string2,_string3);

function getHumanChoice(_string1, _string2, _string3)
{
    let humanChoice = prompt("choose:rock,paper or scissors");
    if (humanChoice == "rock")
    {
        alert("you chose rock")
    }
    else if (humanChoice == "paper")
    {
        alert("you chose paper")
    }
    else if (humanChoice == "scissors")
    {
        alert("you chose scissors")
    }
    else {
        alert("invalid input")
    }
}
getHumanChoice()

let humanScore = 0;
let computerScore = 0;