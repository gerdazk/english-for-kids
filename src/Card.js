const HtmlHelper = require('./HtmlHelper');
const SoundPlayer = require('./SoundPlayer');
const LocalStorage = require('./LocalStorage');
const data = require('./Words');

const evaluateClick = (item) => localStorage.getItem('randomCard') === item;

const handleMouseLeave = (e) => {
  const dataAttr = JSON.parse(e.currentTarget.getAttribute('data'));
  if (document.getElementById(dataAttr.name).innerHTML === dataAttr.nameLT) { // todo
    setTimeout(() => HtmlHelper.changeInnerText(dataAttr.name, dataAttr.name), 200);
  }
};

const handleClick = (e) => {
  const dataAttr = JSON.parse(e.currentTarget.getAttribute('data'));
  if (LocalStorage.getSwitch('switch') === 'train') {
    localStorage.setItem('activeGame', false);
    SoundPlayer.play(dataAttr.name);
    HtmlHelper.changeInnerText(dataAttr.name, dataAttr.nameLT);
    LocalStorage.changeStatistics(dataAttr.name, 'clicked');
  } else {
    if (!localStorage.getItem('activeGame')) return;
    const evaluatedAnswer = evaluateClick(dataAttr.name);
    SoundPlayer.playEvaluated(evaluatedAnswer, dataAttr.disabled);
    if (evaluatedAnswer) {
      LocalStorage.changeStatistics(dataAttr.name, 'correct');
      dataAttr.disabled = true; // todo
      e.currentTarget.opacity = 0.5; // todo
      e.currentTarget.setAttribute('data', JSON.stringify(dataAttr)); // todo
      SoundPlayer.playRandom(data.cards[localStorage.getItem('currentPage')]);
    } else if (dataAttr.disabled !== true) {
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
  }
};

module.exports = { create };
