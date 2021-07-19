const HtmlHelper = require('./HtmlHelper');
const LocalStorage = require('./LocalStorage');
const Statistics = require('./Statistics');

const handleClick = () => {
  LocalStorage.createStatistics();
  HtmlHelper.clearHtml('main');
  Statistics.create();
};

const create = () => {
  HtmlHelper.append(document.body, HtmlHelper.create({
    name: 'button', text: 'reset', id: 'reset', handleClick,
  }));
  console.log('tuscia: ', Statistics);
  document.getElementById('reset').style.display = 'none';
};

module.exports = { create };
