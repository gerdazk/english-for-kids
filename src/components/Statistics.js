const StartButton = require('./buttons/StartButton');
const Reset = require('./buttons/Reset');
const Words = require('../utils/Words');
const LocalStorage = require('../utils/LocalStorage');
const HtmlHelper = require('../utils/HtmlHelper');

const create = () => {
  localStorage.setItem('currentPage', 'statistics');
  Words.getAllCards().forEach((item) => {
    const stat = LocalStorage.getStatistics(item.name);
    // const parent = HtmlHelper.create({name: 'div', id:`${item.name}StatisticsContainer`})
    if (stat) {
      // HtmlHelper.append(document.getElementById('main'), parent)
      const kazkas = HtmlHelper.create({
        id: `${item.name}main`,
        name: 'div',
        className: 'statisticsContainer',
      });

      const name = HtmlHelper.create({
        text: item.name,
        name: 'div',
      });

      const nameLt = HtmlHelper.create({
        text: item.nameLT,
        name: 'div',
      });

      const category = HtmlHelper.create({
        text: item.category,
        name: 'div',
      });

      const clicked = HtmlHelper.create({
        text: JSON.stringify(stat.clicked),
        name: 'div',
      });

      const correct = HtmlHelper.create({
        text: JSON.stringify(stat.correct),
        name: 'div',
      });

      const wrong = HtmlHelper.create({
        text: JSON.stringify(stat.wrong),
        name: 'div',
      });

      const main = document.getElementById('main');

      HtmlHelper.append(main, kazkas);
      HtmlHelper.append(main, name);
      HtmlHelper.append(main, nameLt);
      HtmlHelper.append(main, category);
      HtmlHelper.append(main, clicked);
      HtmlHelper.append(main, correct);
      HtmlHelper.append(main, wrong);
    }
  });
  // eslint-disable-next-line no-use-before-define
  Reset.create(onResetClick);
  HtmlHelper.toggleVisibility('reset', false);
};

const onResetClick = () => {
  LocalStorage.createStatistics();
  HtmlHelper.clearHtml('main');
  create();
};

const showResults = () => {
  HtmlHelper.clearHtml('main');
  HtmlHelper.append(
    document.getElementById('main'),
    HtmlHelper.create({
      name: 'div',
      text: `Total errors: ${localStorage.getItem('totalErrors')}`,
    }),
  );
  StartButton.toggleDisplay(false);
  return document.getElementById('main');
};

module.exports = { create, showResults };
