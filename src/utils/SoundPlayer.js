const LocalStorage = require('./LocalStorage');
const Statistics = require('../components/Statistics');
const HtmlHelper = require('./HtmlHelper');

function play(name) {
  const audio = new Audio(`./assets/audio/${name}.mp3`);
  return audio.play();
}

const playRandom = (collection) => {
  const filteredCollection = collection.filter(
    (item) => HtmlHelper.getElementData(HtmlHelper.getElement(`${item.name}Container`)).disabled !== true,
  );
  if (!filteredCollection.length) {
    localStorage.setItem('activeGame', false);
    console.log('setinu i false');
    Statistics.showResults();
  }
  const item = filteredCollection[Math.floor(Math.random() * filteredCollection.length)]
    .name;
  LocalStorage.changeRandomCard(item);
  return play(item);
};

const playEvaluated = (answer, disabled) => {
  if (disabled) return;
  if (answer) {
    play('correct');
  } else {
    play('failure');
  }
};
// ar reikalingas isvis sitas metodas?
module.exports = { play, playRandom, playEvaluated };
