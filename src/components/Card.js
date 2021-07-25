const HtmlHelper = require('../utils/HtmlHelper');
const SoundPlayer = require('../utils/SoundPlayer');
const LocalStorage = require('../utils/LocalStorage');
const Words = require('../utils/Words');
const Rotate = require('./Rotate');
const Stars = require('./Stars');

const evaluateClick = (item) => localStorage.getItem('randomCard') === item;

const disable = (name) => {
  HtmlHelper.getElement(`${name}Container`).classList.add('disabled');
  // document.getElementById(`${name}Container`).classList.add('disabled');
};

const handleMouseLeave = (e) => {
  const data = HtmlHelper.getElementData(e.currentTarget);
  // const data = JSON.parse(e.currentTarget.getAttribute('data'));
  if (HtmlHelper.getElement(data.name).innerHTML === data.nameLT) {
    // todo
    setTimeout(() => {
      HtmlHelper.getElement(`${data.name}Container`)
        .classList.remove('is-flipped');
      HtmlHelper.getElement(`${data.name}`)
        .classList.remove('is-flipped-child');
      HtmlHelper.changeInnerText(data.name, data.name);
      HtmlHelper.toggleVisibility(`${data.name}rotate`, true);
    }, 300);
  }
};

const handleCorrectAnswer = (element) => {
  const data = HtmlHelper.getElementData(element);
  LocalStorage.changeStatistics(data.name, 'correct');
  Stars.add(true);
  data.disabled = true;
  disable(data.name);
  HtmlHelper.setElementData(element, data);
  // element.setAttribute('data', JSON.stringify(data)); // todo
  setTimeout(() => {
    SoundPlayer.playRandom(
      Words.getData()[localStorage.getItem('currentPage')],
    );
  }, 1000);
};

const handleWrongAnswer = () => {
  LocalStorage.changeStatistics(localStorage.getItem('randomCard'), 'wrong');
  Stars.add(false);
  LocalStorage.setTotalErrors();
};

const handleTrainMode = (element) => {
  const data = HtmlHelper.getElementData(element);
  console.log('setinu i false');
  localStorage.setItem('activeGame', false);
  SoundPlayer.play(data.name);
  LocalStorage.changeStatistics(data.name, 'clicked');
};

const handlePlayMode = (element) => {
  const data = HtmlHelper.getElementData(element);
  if (localStorage.getItem('activeGame') !== 'true') return;
  const answer = evaluateClick(data.name);
  SoundPlayer.playEvaluated(answer, data.disabled);
  if (answer) {
    handleCorrectAnswer(element);
  } else if (data.disabled !== true) {
    handleWrongAnswer();
  }
};

const handleClick = (e) => {
  if (e.target.id === 'rotate' || e.target.id === 'rotate-image') return;
  if (LocalStorage.getSwitch('switch') === 'train') {
    handleTrainMode(e.currentTarget);
  } else {
    handlePlayMode(e.currentTarget);
  }
};

const create = (parentId, categoryData) => {
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
    attributes: [
      { name: 'src', value: `./assets/img/${categoryData.name}.jpg` },
    ],
    id: `${categoryData.name}Image`,
  });

  const cardLower = HtmlHelper.create({
    name: 'div',
    className: 'card-lower',
  });

  const cardPlay = HtmlHelper.create({
    name: 'div',
    id: categoryData.name,
    className: 'card',
  });

  const cardTrain = HtmlHelper.create({
    name: 'div',
    id: categoryData.name,
    text: categoryData.name,
    className: 'card',
  });
  HtmlHelper.append(HtmlHelper.getElement(parentId), parent);
  HtmlHelper.append(parent, image);
  if (LocalStorage.getSwitch() === 'play') {
    HtmlHelper.append(parent, cardPlay);
  } else {
    HtmlHelper.append(parent, cardLower);
    HtmlHelper.append(cardLower, cardTrain);
    Rotate.create(cardLower, categoryData);
  }
};

module.exports = { create };
