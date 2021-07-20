const LocalStorage = require('./LocalStorage');
const Category = require('./Category');
// const data = require('./data');

function play(name) {
  const audio = new Audio(`./assets/audio/${name}.mp3`);
  return audio.play();
}

const playRandom = (collection) => {
  const filteredCollection = collection.filter((item) => JSON.parse(document.getElementById(item.name).getAttribute('data')).disabled !== true);
  if (!filteredCollection.length) {
    Category.showResults();
  }
  const item = filteredCollection[Math.floor(Math.random() * filteredCollection.length)].name;
  const audio = new Audio(`./assets/audio/${item}.mp3`);
  LocalStorage.changeRandomCard(item);
  return audio.play();
};

const playEvaluated = (answer, disabled) => {
  if (disabled) return;
  if (answer) {
    const correct = new Audio('./assets/audio/correct.mp3');
    correct.play();
  } else {
    const wrong = new Audio('./assets/audio/failure.mp3');
    wrong.play();
  }
};
module.exports = { play, playRandom, playEvaluated };
