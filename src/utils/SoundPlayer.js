const { LocalStorage } = require('.'); // TODO
const Statistics = require('../components/Statistics');

function play(name) {
  const audio = new Audio(`./assets/audio/${name}.mp3`);
  return audio.play();
}

const playRandom = (collection) => {
  const filteredCollection = collection.filter(
    (item) => JSON.parse(
      document.getElementById(`${item.name}Container`).getAttribute('data'),
    ).disabled !== true,
  );
  if (!filteredCollection.length) {
    localStorage.setItem('activeGame', false);
    Statistics.showResults();
  }
  const item = filteredCollection[Math.floor(Math.random() * filteredCollection.length)]
    .name;
  LocalStorage.changeRandomCard(item);
  return play(item);
};

const playEvaluated = (answer, disabled) => {
  if (disabled || localStorage.getItem('randomCard') === undefined) return;
  if (answer) {
    play('correct');
  } else {
    play('failure');
  }
};
// ar reikalingas isvis sitas metodas?
module.exports = { play, playRandom, playEvaluated };
