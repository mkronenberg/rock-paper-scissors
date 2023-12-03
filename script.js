// Declarations
const choices = ['Rock', 'Paper', 'Scissors'];
let userScore = 0;
let computerScore = 0;


// get elements from the HTML
const choiceBtns = document.querySelectorAll('.choiceBtn');
const userChoiceDisplay = document.querySelector('#user-choice');
const computerChoiceDisplay = document.querySelector('#computer-choice');
const userScoreDisplay = document.querySelector('#user-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const result = document.querySelector('#result');

const getComputerChoice = () => {
  return choices[Math.floor(Math.random() * 3)];
};

const rules = (user, computer) => {
  return user === computer                               ? `tie`
       : user === 'Rock'      && computer === 'Paper'    ? `lose`
       : user === 'Rock'      && computer === 'Scissors' ? `win`
       : user === 'Paper'     && computer === 'Rock'     ? `win`
       : user === 'Paper'     && computer === 'Scissors' ? `lose`
       : user === 'Scissors'  && computer === 'Rock'     ? `lose`
       : user === 'Scissors'  && computer === 'Paper'    ? `win`
       : `error`;
}

const playRound = (playerSelection) => {
  userChoiceDisplay.textContent = playerSelection;
  const computerChoice = getComputerChoice();
  computerChoiceDisplay.textContent = computerChoice;
  const outcome = rules(playerSelection, computerChoice);
  switch (outcome) {
    case 'tie':
      result.textContent = `It's a tie! Try again!`;
      break;
    case 'win':
      result.textContent = `You win! ${playerSelection} beats ${computerChoice}`;
      userScore++;
      userScoreDisplay.textContent = userScore.toString();
      break;
    case 'lose':
      result.textContent = `You lose! ${computerChoice} beats ${playerSelection}`;
      computerScore++;
      computerScoreDisplay.textContent = computerScore.toString();
      break;
    default:
      break;
  }
};

// Add event for each choice button
choiceBtns.forEach((choiceBtn) => {
  choiceBtn.addEventListener('click', function(){
    playRound(choiceBtn.name);
  })
})