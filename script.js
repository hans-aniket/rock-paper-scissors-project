document.addEventListener('DOMContentLoaded', () => {
    function getComputerChoice(_string1, _string2, _string3) {
        let randomValue = Math.random();
        console.log("computer's choice");
        if (randomValue <= 0.4) {
            console.log(_string1);
            return _string1;
        } else if (randomValue >= 0.7) {
            console.log(_string2);
            return _string2;
        } else {
            console.log(_string3);
            return _string3;
        }
    }

    let _string1 = "rock";
    let _string2 = "paper";
    let _string3 = "scissors";

    let yourChoice = null;
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "rock" && computerChoice == _string1) {
            alert("both chose rock, nobody won");
        } else if (humanChoice == "rock" && computerChoice == _string2) {
            alert("you chose rock and computer chose paper so, you lose and computer wins");
            alert(`your score = ${humanScore} and computer's score = ${++computerScore}`);
        } else if (humanChoice == "rock" && computerChoice == _string3) {
            alert("you chose rock and computer chose scissors so, you won");
            alert(`your score = ${++humanScore} and computer's score = ${computerScore}`);
        } else if (humanChoice == "paper" && computerChoice == _string1) {
            alert("you chose paper and computer chose rock so, you won");
            alert(`your score = ${++humanScore} and computer's score = ${computerScore}`);
        } else if (humanChoice == "paper" && computerChoice == _string2) {
            alert("both chose paper, nobody won");
        } else if (humanChoice == "paper" && computerChoice == _string3) {
            alert("you chose paper and computer chose scissors so, you lose and computer won");
            alert(`your score = ${humanScore} and computer's score = ${++computerScore}`);
        } else if (humanChoice == "scissors" && computerChoice == _string1) {
            alert("you chose scissors and computer chose rock so, you lose and computer won");
            alert(`your score = ${humanScore} and computer's score = ${++computerScore}`);
        } else if (humanChoice == "scissors" && computerChoice == _string2) {
            alert("you chose scissors and computer chose paper so, you won and computer lose");
            alert(`your score = ${++humanScore} and computer's score = ${computerScore}`);
        } else if (humanChoice == "scissors" && computerChoice == _string3) {
            alert("both chose scissors, nobody won");
        }
    }

    function playgame() {
        const choiceBox = document.querySelector("#choiceContainer");

        choiceBox.addEventListener("click", (event) => {
            const target = event.target;

            switch (target.id) {
                case "rock":
                    yourChoice = "rock";
                    break;
                case "paper":
                    yourChoice = "paper";
                    break;
                case "scissor":
                    yourChoice = "scissors";
                    break;
            }

            if (yourChoice) {
                const computerSelection = getComputerChoice(_string1, _string2, _string3);
                playRound(yourChoice, computerSelection);

                if (humanScore === 5) {
                    alert("Congrats, you won");
                } else if (computerScore === 5) {
                    alert("Oops, computer won! Better luck next time");
                }
            }
        });
    }

    playgame();
});

