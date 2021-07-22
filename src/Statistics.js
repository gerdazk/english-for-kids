const LocalStorage = require('./LocalStorage');
const HtmlHelper = require('./HtmlHelper');
const data = require('./Words');

const create = () => {
  data.getAllCards().forEach((item) => {
    const stat = LocalStorage.getStatistics(item.name);
    // const parent = HtmlHelper.create({name: 'div', id:`${item.name}StatisticsContainer`})
    if (stat) {
      // HtmlHelper.append(document.getElementById('main'), parent)
      HtmlHelper.append(
        document.getElementById('main'),
        HtmlHelper.create({
          id: `${item.name}main`,
          name: 'div',
          className: 'statisticsContainer',
        }),
      );
      HtmlHelper.append(
        document.getElementById(`${item.name}main`),
        HtmlHelper.create({
          text: item.name,
          name: 'div',
        }),
      );
      HtmlHelper.append(
        document.getElementById(`${item.name}main`),
        HtmlHelper.create({
          text: item.nameLT,
          name: 'div',
        }),
      );
      HtmlHelper.append(
        document.getElementById(`${item.name}main`),
        HtmlHelper.create({
          text: item.category,
          name: 'div',
        }),
      );
      HtmlHelper.append(
        document.getElementById(`${item.name}main`),
        HtmlHelper.create({
          text: JSON.stringify(stat.clicked),
          name: 'div',
        }),
      );
      HtmlHelper.append(
        document.getElementById(`${item.name}main`),
        HtmlHelper.create({
          text: JSON.stringify(stat.correct),
          name: 'div',
        }),
      );
      HtmlHelper.append(
        document.getElementById(`${item.name}main`),
        HtmlHelper.create({
          text: JSON.stringify(stat.wrong),
          name: 'div',
        }),
      );
    }
    return document.getElementById('main');
  });
  document.getElementById('reset').style.display = 'inline-block';
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
  // StartButton.toggleDisplay(false);
  return document.getElementById('main');
};

module.exports = { create, showResults };
