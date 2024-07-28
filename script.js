function getComputerChoice( _string1, _string2, _string3)
{
    let randomValue = Math.random()
    if (randomValue <= 0.5)
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
