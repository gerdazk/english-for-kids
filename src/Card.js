const HtmlHelper = require('./HtmlHelper');
const SoundPlayer = require('./SoundPlayer');
const LocalStorage = require('./LocalStorage');
const data = require('./Words');

const evaluateClick = (item) => localStorage.getItem('randomCard') === item;

const handleClick = (e) => {
  const dataAttr = JSON.parse(e.target.getAttribute('data'));
  if (LocalStorage.getSwitch('switch') === 'train') {
    SoundPlayer.play(dataAttr.name);
    HtmlHelper.changeInnerText(e.target.id, dataAttr.nameLT);
    LocalStorage.changeStatistics(dataAttr.name, 'clicked');
  } else {
    const evaluatedAnswer = evaluateClick(dataAttr.name);
    SoundPlayer.playEvaluated(evaluatedAnswer, dataAttr.disabled);
    if (evaluatedAnswer) {
      LocalStorage.changeStatistics(dataAttr.name, 'correct');
      dataAttr.disabled = true; // todo
      e.target.style.color = 'black'; // todo
      e.target.setAttribute('data', JSON.stringify(dataAttr)); // todo
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

const handleMouseLeave = (e) => {
  const dataAttr = JSON.parse(e.target.getAttribute('data'));
  if (e.target.innerHTML === dataAttr.nameLT) {
    HtmlHelper.changeInnerText(e.target.id, dataAttr.name);
  }
};

const create = (parentElement, categoryData) => {
  const parent = HtmlHelper.create({
    name: 'div',
    id: `${categoryData.name}Container`,
    className: 'card-container',
  });

  const image = HtmlHelper.create({
    name: 'img',
    attributes: [{ name: 'src', value: `./assets/img/${categoryData.name}.jpg` }],
    id: `${categoryData.name}Image`,
  });

  const card = HtmlHelper.create({
    name: 'div',
    handleClick,
    id: categoryData.name,
    text: categoryData.name,
    data: categoryData,
    handleMouseLeave,
    image,
    className: 'card',
  });

  HtmlHelper.append(parentElement, parent);
  HtmlHelper.append(parent, image);
  HtmlHelper.append(parent, card);
};

module.exports = { create };
