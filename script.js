function getComputerChoice(){
    let value = Math.Random();
    let choice;
    if(value<0.33){
        choice = "rock";
    } else if(value<0.66){
        choice = "paper";
    } else {
        choice = "scissors";
    }
}