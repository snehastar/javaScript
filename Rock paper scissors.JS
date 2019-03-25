// Function to get user's choice
const getUserChoice = (userInput) =>{
   //The user can type Rock,ROCK,rock..etc
 userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors')
   {
     return userInput;
   }
  //If user inputs something invalid
  else{
    console.log('Invalid input');
  }
};

// Function to get computer's choice
 const getComputerChoice = () => {
 //to get choice from 0 to 2
 const randomNumber = Math.floor(Math.random() * 2);
   switch (randomNumber){
  case 0:
  return 'rock';
  case 1:
  return 'paper';
  case 2:
  return 'scissors';
   }
};

// Function to determine the winner
let determineWinner = (userChoice, computerChoice) =>
{
  if(computerChoice === userChoice)
  {
    return 'Draw';
  }
  if(userChoice === 'paper'){
    if(computerChoice === 'rock')
      {
        return 'You won!'
      } else{
        return 'computer won!'
      }
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper')
      {return 'You won!'
      } else{
        return 'computer won!'
      }
  }
      if(userChoice === 'scissors'){
    if(computerChoice === 'paper')
      {return 'You won!'
      } else{
        return 'computer won!'
      }
    
  }
};

// Function to play game
let playGame =() => {
  let userChoice = getUserChoice('paper');
  console.log('user : ' + userChoice);
  let computerChoice = getComputerChoice();
  console.log('computer :' + computerChoice );
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();



