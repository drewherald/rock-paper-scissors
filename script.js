function getComputerChoice(){
    let value = Math.random();
    if(value<0.33){
        return "rock";
    } else if(value<0.66){
        return "paper";
    } else {
        return "scissors";
    }
}

    function playRound(playerSelection, computerSelection){
        if(playerSelection.toLowerCase === computerSelection){
            return `Tie! Both players chose ${playerSelection}`;
        } 

        if(playerSelection === "rock"){
            if(computerSelection === "paper"){
                return "You Lose! Paper beats Rock!"
            } else{
                return "You Win! Rock beats Scissors!"
            }
        }

        if(playerSelection === "paper"){
            if(computerSelection === "scissors"){
                return "You Lose! Scissors beats Paper!"
            } else{
                return "You Win! Paper beats Rock!"
            }
        }

        if(playerSelection === "scissors"){
            if(computerSelection === "rock"){
                return "You Lose! Rock beats Scissors!"
            } else{
                return "You Win! Scissors beats Paper!"
            }
        }

        return "error";
    }

    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));

    
