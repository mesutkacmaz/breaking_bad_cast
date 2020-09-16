const searchCharacter = document.querySelector('#search-character');

const breakingBad = new BreakingBad();
const ui = new UI();

document.addEventListener('DOMContentLoaded', function() {
  breakingBad.getAllCharacters()
    .then(data => {
      ui.showAllCharacters(data);
    })
});

searchCharacter.addEventListener('keyup', (e) => {
  const userText = e.target.value;

  if (userText !== '') {
    breakingBad.getCharacters(userText)
      .then(data => {
        ui.clearScreen();
        ui.showAllCharacters(data);
      })
  } else {
    breakingBad.getAllCharacters()
    .then(data => {
      ui.clearScreen();
      ui.showAllCharacters(data);
    })
  }
})