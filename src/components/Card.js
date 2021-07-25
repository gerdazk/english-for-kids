const HtmlHelper = require('../utils/HtmlHelper');
const SoundPlayer = require('../utils/SoundPlayer');
const LocalStorage = require('../utils/LocalStorage');
const Words = require('../utils/Words');
const Rotate = require('./Rotate');
const Stars = require('./Stars');

const evaluateClick = (item) => localStorage.getItem('randomCard') === item;

const disable = (name) => {
  document.getElementById(`${name}Container`).classList.add('disabled');
};

const handleMouseLeave = (e) => {
  const data = JSON.parse(e.currentTarget.getAttribute('data'));
  if (document.getElementById(data.name).innerHTML === data.nameLT) {
    // todo
    setTimeout(() => {
      document
        .getElementById(`${data.name}Container`)
        .classList.remove('is-flipped');
      document
        .getElementById(`${data.name}`)
        .classList.remove('is-flipped-child');
      HtmlHelper.changeInnerText(data.name, data.name);
    }, 300);
  }
};

const handleCorrectAnswer = (element) => {
  const data = JSON.parse(element.getAttribute('data'));
  LocalStorage.changeStatistics(data.name, 'correct');
  Stars.add(true);
  data.disabled = true;
  disable(data.name);
  element.setAttribute('data', JSON.stringify(data)); // todo
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
  const data = JSON.parse(element.getAttribute('data'));
  localStorage.setItem('activeGame', false);
  SoundPlayer.play(data.name);
  LocalStorage.changeStatistics(data.name, 'clicked');
};

const handlePlayMode = (element) => {
  const data = JSON.parse(element.getAttribute('data'));
  if (!localStorage.getItem('activeGame')) return;
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
    // localStorage.setItem('activeGame', false);
    // SoundPlayer.play(data.name);
    // LocalStorage.changeStatistics(data.name, 'clicked');
  } else {
    handlePlayMode(e.currentTarget);
  //   if (!localStorage.getItem('activeGame')) return;
  //   const answer = evaluateClick(data.name);
  //   SoundPlayer.playEvaluated(answer, data.disabled);
  //   if (answer) {
  //     handleCorrectAnswer(e.currentTarget);
  //   } else if (data.disabled !== true) {
  //     handleWrongAnswer();
    // LocalStorage.changeStatistics(
    //   localStorage.getItem('randomCard'),
    //   'wrong',
    // );
    // Stars.add(false);
    // LocalStorage.setTotalErrors();
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
    className: ['card', 'card-front'],
  });
  HtmlHelper.append(document.getElementById(parentId), parent);
  HtmlHelper.append(parent, image);
  if (LocalStorage.getSwitch() === 'play') {
    HtmlHelper.append(parent, cardPlay);
  } else {
    HtmlHelper.append(parent, cardTrain);
    Rotate.create(parent, categoryData);
  }
};

module.exports = { create };
