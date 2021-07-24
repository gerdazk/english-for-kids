const { LocalStorage } = require('.'); // TODO
const Statistics = require('../components/Statistics');

function play(name) {
  const audio = new Audio(`./assets/audio/${name}.mp3`);
  return audio.play();
}

const playRandom = (collection) => {
  console.log(collection);
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
  const audio = new Audio(`./assets/audio/${item}.mp3`); // todo perpanaudoti play metoda
  LocalStorage.changeRandomCard(item);
  return audio.play();
};

const playEvaluated = (answer, disabled) => {
  console.log(localStorage.getItem('randomCard') === undefined);
  if (disabled || localStorage.getItem('randomCard') === undefined) return;
  if (answer) {
    const correct = new Audio('./assets/audio/correct.mp3'); // todo perpanaudoti play metoda
    correct.play();
  } else {
    const wrong = new Audio('./assets/audio/failure.mp3'); // todo perpanaudoti play metoda
    wrong.play();
  }
};
module.exports = { play, playRandom, playEvaluated };
