const HtmlHelper = require('../utils/HtmlHelper');
const SoundPlayer = require('../utils/SoundPlayer');
const LocalStorage = require('../utils/LocalStorage');
const Words = require('../utils/Words');
const Rotate = require('./Rotate');

const evaluateClick = (item) => localStorage.getItem('randomCard') === item;

const handleMouseLeave = (e) => {
  const data = JSON.parse(e.currentTarget.getAttribute('data'));
  if (document.getElementById(data.name).innerHTML === data.nameLT) { // todo
    setTimeout(() => HtmlHelper.changeInnerText(data.name, data.name), 200);
  }
};

const handleClick = (e) => {
  const data = JSON.parse(e.currentTarget.getAttribute('data'));
  if (e.target.id === 'rotate' || e.target.id === 'rotate-image') return;
  if (LocalStorage.getSwitch('switch') === 'train') {
    localStorage.setItem('activeGame', false);
    SoundPlayer.play(data.name);
    LocalStorage.changeStatistics(data.name, 'clicked');
  } else {
    if (!localStorage.getItem('activeGame')) return;
    const evaluatedAnswer = evaluateClick(data.name);
    SoundPlayer.playEvaluated(evaluatedAnswer, data.disabled);
    if (evaluatedAnswer) {
      LocalStorage.changeStatistics(data.name, 'correct');
      data.disabled = true; // todo
      e.currentTarget.opacity = 0.5; // todo
      e.currentTarget.setAttribute('data', JSON.stringify(data)); // todo
      SoundPlayer.playRandom(Words.cards[localStorage.getItem('currentPage')]);
    } else if (data.disabled !== true) {
      LocalStorage.changeStatistics(
        localStorage.getItem('randomCard'),
        'wrong',
      );
      LocalStorage.setTotalErrors();
    }
  }
};

const create = (parentElement, categoryData) => {
  const parent = HtmlHelper.create({
    name: 'div',
    data: categoryData,
    id: `${categoryData.name}Container`,
    className: 'card-container',
    handleClick,
    handleMouseLeave,
  });

  const image = HtmlHelper.create({
    name: 'img',
    attributes: [{ name: 'src', value: `./assets/img/${categoryData.name}.jpg` }],
    id: `${categoryData.name}Image`,
  });

  const cardPlay = HtmlHelper.create({
    name: 'div',
    id: categoryData.name,
    image,
    className: 'card',
  });

  const cardTrain = HtmlHelper.create({
    name: 'div',
    id: categoryData.name,
    text: categoryData.name,
    image,
    className: 'card',
  });

  HtmlHelper.append(parentElement, parent);
  HtmlHelper.append(parent, image);
  if (LocalStorage.getSwitch() === 'play') {
    HtmlHelper.append(parent, cardPlay);
  } else {
    HtmlHelper.append(parent, cardTrain);
    Rotate.create(parent, categoryData);
  }
};

module.exports = { create };
