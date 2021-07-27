const Reset = require('./buttons/Reset');
const Words = require('../utils/Words');
const LocalStorage = require('../utils/LocalStorage');
const HtmlHelper = require('../utils/HtmlHelper');
// const SoundPlayer = require('../utils/SoundPlayer');
// const Router = require('./Router');

const createColumns = () => {
  const container = HtmlHelper.create({
    id: 'statisticsContainer',
    name: 'div',
    className: 'statistics-container',
  });

  const parent = HtmlHelper.create({
    name: 'div',
    className: ['row', 'title-row'],
  });

  const name = HtmlHelper.create({
    text: 'WORD',
    name: 'div',
    className: 'cell',
  });

  const nameLT = HtmlHelper.create({
    text: 'TRANSLATION',
    name: 'div',
    className: 'cell',
  });

  const category = HtmlHelper.create({
    text: 'CATEGORY',
    name: 'div',
    className: 'cell',
  });

  const clicked = HtmlHelper.create({
    text: 'CLICKED',
    name: 'div',
    className: 'cell',
  });

  const correct = HtmlHelper.create({
    text: 'CORRECT',
    name: 'div',
    className: 'cell',
  });

  const wrong = HtmlHelper.create({
    text: 'WRONG',
    name: 'div',
    className: 'cell',
  });

  const main = HtmlHelper.getElement('main');
  HtmlHelper.append(main, container);
  HtmlHelper.append(container, parent);

  HtmlHelper.append(parent, name);
  HtmlHelper.append(parent, nameLT);
  HtmlHelper.append(parent, category);
  HtmlHelper.append(parent, clicked);
  HtmlHelper.append(parent, correct);
  HtmlHelper.append(parent, wrong);
};

const calculateAnswers = (data) => {
  let total;
  let correct;
  let wrong;
  if (data.correct && data.wrong) {
    total = data.correct + data.wrong;
    correct = Math.round((data.correct / total) * 100);
    wrong = Math.round((data.wrong / total) * 100);
  } else if (!data.correct && !data.wrong) {
    correct = 0;
    wrong = 0;
  } else if (data.correct && !data.wrong) {
    correct = 100;
    wrong = 0;
  } else {
    correct = 0;
    wrong = 100;
  }
  return [correct, wrong];
};

const create = () => {
  localStorage.setItem('currentPage', 'statistics');
  createColumns();
  const container = HtmlHelper.getElement('statisticsContainer');
  Words.getAllCards().forEach((item) => {
    const stat = LocalStorage.getStatistics(item.name);
    const correctAnswers = calculateAnswers(stat)[0];
    const wrongAnswers = calculateAnswers(stat)[1];
    if (stat) {
      const parent = HtmlHelper.create({
        id: `${item.name}row`,
        name: 'div',
        className: 'row',
      });

      const name = HtmlHelper.create({
        text: item.name,
        name: 'div',
        className: 'cell',
      });

      const nameLT = HtmlHelper.create({
        text: item.nameLT,
        name: 'div',
        className: 'cell',
      });

      const category = HtmlHelper.create({
        text: item.category,
        name: 'div',
        className: 'cell',
      });

      const clicked = HtmlHelper.create({
        text: JSON.stringify(stat.clicked),
        name: 'div',
        className: 'cell',
      });

      const correct = HtmlHelper.create({
        text: JSON.stringify(correctAnswers),
        name: 'div',
        className: 'cell',
      });

      const wrong = HtmlHelper.create({
        text: JSON.stringify(wrongAnswers),
        name: 'div',
        className: 'cell',
      });

      HtmlHelper.append(container, parent);
      HtmlHelper.append(parent, name);
      HtmlHelper.append(parent, nameLT);
      HtmlHelper.append(parent, category);
      HtmlHelper.append(parent, clicked);
      HtmlHelper.append(parent, correct);
      HtmlHelper.append(parent, wrong);
    }
  });
  // eslint-disable-next-line no-use-before-define
  Reset.create(onResetClick);
  HtmlHelper.toggleVisibility('reset', true);
};

const onResetClick = () => {
  localStorage.setItem('reset', true);
  LocalStorage.createStatistics();
  HtmlHelper.clearHtml('main');
  create();
  localStorage.setItem('reset', false);
};

const showResults = () => {
  HtmlHelper.clearHtml('main');
  const total = localStorage.getItem('totalErrors');

  const successImage = HtmlHelper.create({
    name: 'img',
    attributes: [{ name: 'src', value: '../assets/img/success.png' }],
  });
  const failureImage = HtmlHelper.create({
    name: 'img',
    attributes: [{ name: 'src', value: '../assets/img/failure.png' }],
  });
  const container = HtmlHelper.create({
    name: 'div',
    className: 'total-errors',
    text: `Total errors: ${total}`,
  });
  HtmlHelper.append(HtmlHelper.getElement('main'), container);
  if (total < 1) {
    HtmlHelper.append(container, successImage);
    // SoundPlayer.play('success');
  } else {
    HtmlHelper.append(container, failureImage);
    // SoundPlayer.play('failure');
  }
  // setTimeout(() => {
  //   Router.navigateToMain();
  // }, 5000); // gali buti beda, patikrinti kai veiks sound
  HtmlHelper.toggleVisibility('start', false);
  return HtmlHelper.getElement('main');
};

module.exports = { create, showResults };
