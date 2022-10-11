const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

let winCounter = 0;
let loseCounter = 0;


rockBtn.addEventListener("click",function(){
    game("rock")
});
paperBtn.addEventListener("click",function(){
    game("paper")
});
scissorsBtn.addEventListener("click",function(){
    game("scissors")
});


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

    function game(playerChoice){
       if(winCounter>=5){
        document.getElementById("results").innerHTML = "Game over! You win!";
        return;
       }
       if(loseCounter>=5){
        document.getElementById("results").innerHTML = "Game over! You lose!";
        return;
       }
        let temp;
            temp = playRound(playerChoice, getComputerChoice());
            console.log(temp);
            if(temp.includes("Win")){
                winCounter++;
            } else if(temp.includes("Lose")){
                loseCounter++;
            }
            
            
            document.getElementById("results").innerHTML = `${temp} \n Win: ${winCounter} Lose: ${loseCounter}`;
            console.log(temp);
    }

   




    
