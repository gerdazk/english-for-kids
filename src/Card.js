const HtmlHelper = require('./HtmlHelper');
const SoundPlayer = require('./SoundPlayer');
const LocalStorage = require('./LocalStorage');
const data = require('./data');

const evaluateClick = (item) => localStorage.getItem('randomCard') === item;

const handleClick = (e) => {
  const dataAttr = JSON.parse(e.target.getAttribute('data'));
  if (LocalStorage.getSwitch('switch') === 'train') {
    SoundPlayer.play(dataAttr.name);
    HtmlHelper.changeInnerText(e.target.id, dataAttr.nameLT);
    LocalStorage.changeStatistics(dataAttr.name, 'clicked');
  } else {
    const evaluatedAnswer = (evaluateClick(dataAttr.name));
    SoundPlayer.playEvaluated(evaluatedAnswer, dataAttr.disabled);
    if (evaluatedAnswer) {
      LocalStorage.changeStatistics(dataAttr.name, 'correct');
      dataAttr.disabled = true;
      console.log(dataAttr);
      e.target.style.color = 'black';
      e.target.setAttribute('data', JSON.stringify(dataAttr));
      SoundPlayer.playRandom(data.cards[localStorage.getItem('currentPage')]);
    } else if (dataAttr.disabled !== true) {
      LocalStorage.changeStatistics(localStorage.getItem('randomCard'), 'wrong');
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
  HtmlHelper.append(
    parentElement,
    HtmlHelper.create({
      name: 'div',
      handleClick,
      id: categoryData.name,
      data: categoryData,
      handleMouseLeave,
    }),
  );
  return parentElement;
};

module.exports = { create };
