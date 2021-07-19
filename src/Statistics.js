const LocalStorage = require('./LocalStorage');
const HtmlHelper = require('./HtmlHelper');
const data = require('./data');

const create = () => {
  console.log('labas');
  data.getAllCards().forEach((item) => {
    const stat = LocalStorage.getStatistics(item.name);
    if (stat) {
      HtmlHelper.append(
        document.getElementById('main'),
        HtmlHelper.create({
          id: `${item.name}main`,
          name: 'div',
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

module.exports = { create };
