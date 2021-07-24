const HtmlHelper = require('../utils/HtmlHelper');
const SoundPlayer = require('../utils/SoundPlayer');
const LocalStorage = require('../utils/LocalStorage');
const Words = require('../utils/Words');
const Rotate = require('./Rotate');

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
      disable(data.name);
      e.currentTarget.setAttribute('data', JSON.stringify(data)); // todo
      setTimeout(() => {
        SoundPlayer.playRandom(
          Words.getData()[localStorage.getItem('currentPage')],
        );
      }, 1000);
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

  // const cardTrainBack = HtmlHelper.create({
  //   name: 'div',
  //   id: categoryData.nameLT,
  //   text: categoryData.nameLT,
  //   image,
  //   className: ['card', 'card-back'],
  // });

  const cardTrain = HtmlHelper.create({
    name: 'div',
    id: categoryData.name,
    text: categoryData.name,
    image,
    className: ['card', 'card-front'],
  });

  HtmlHelper.append(parentElement, parent);
  HtmlHelper.append(parent, image);
  if (LocalStorage.getSwitch() === 'play') {
    HtmlHelper.append(parent, cardPlay);
  } else {
    HtmlHelper.append(parent, cardTrain);
    // HtmlHelper.append(parent, cardTrainBack);
    Rotate.create(parent, categoryData);
  }
};

module.exports = { create };
