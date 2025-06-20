function play(userChoice) {
  const choices = ['stone', 'paper', 'scissors'];
  const emojis = {
    stone: '✊',
    paper: '✋',
    scissors: '✌️'
  };

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];

  let result = '';

  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === 'stone' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'stone') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "You win! 🎉";
  } else {
    result = "Computer wins! 😢";
  }

  document.getElementById('result').innerHTML = `
    <p>You chose: ${emojis[userChoice]}</p>
    <p>Computer chose: ${emojis[computerChoice]}</p>
    <p><strong>${result}</strong></p>
  `;
}
