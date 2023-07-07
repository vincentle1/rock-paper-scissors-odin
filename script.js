function getComputerChoice() {

  const computerMoves = ["Rock", "Paper", "Scissors"];
  return computerMoves[Math.floor(Math.random()*3)];

}

function playRound(playerSelection, computerSelection) {
    
  let firstChar = playerSelection[0].toUpperCase();
  let otherChar = playerSelection.slice(1).toLowerCase();
  let finalPlayerSelect = `${firstChar}${otherChar}`;

  //Compare the two using if else statements. 
  //Rock beats scissors
  //Rock loses paper

  //Scissors beats paper
  //Scissors loses rock
  
  //Paper beats rock
  //Paper loses scissors

  //Repeat for both?

  if (finalPlayerSelect === computerSelection) {
    return `You both selected ${finalPlayerSelect }! Tie!`
  }

  else if (finalPlayerSelect  === "Rock" && computerSelection === "Scissors") {
    return `Rock beats Scissors! You win!`;
  } 
  
  else if (finalPlayerSelect  === "Rock" && computerSelection === "Paper") {
    return "Rock loses to paper! You lose!";
  }

  else if (finalPlayerSelect  === "Scissors" && computerSelection === "Paper") {
    return "Scissors beats Paper! You win!"
  }

  else if (finalPlayerSelect  === "Scissors" && computerSelection === "Rock") {
    return "Scissors loses to Rock! You lose!"
  }

  else if (finalPlayerSelect  === "Paper" && computerSelection === "Rock") {
    return "Paper beats Rock! You win!";
  }

  else if (finalPlayerSelect  === "Paper" && computerSelection === "Scissors") {
    return "Paper loses to Scissors! You lose!"
  }


}

function game() {
  console.log("Welcome to Rock Paper Scissors!");
  /*Initialze score variables outside of for loop.create a for loop that runs for 5 rounds. 
  Keep track of score during this. Each round, first prompt the user to type in a move. 
  Then, have the computer make a selection. Now, activate playRound. At the end of 
  playRound, store the output by matching substrwin, lose, or tie using if else statements
  to add to the score. At the end of the for loop, tally up the scores and return a result. 
  */

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i ++) {
    prompt()
  }
}




 //announce rules of game. Player move. 
 //console.log("Player move: ");
  

 //Collect player input (case-insensitive).