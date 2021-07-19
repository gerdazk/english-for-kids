const Category = require('./Category');
const Switch = require('./Switch');
const data = require('./data');
const StartButton = require('./StartButton');
const LocalStorage = require('./LocalStorage');
const Menu = require('./Menu');
const HtmlHelper = require('./HtmlHelper');

const onMenuItemClick = (e) => {
  console.log('paspaustas menu itemas: ', e);
  HtmlHelper.clearHtml('main');
  Category.create(document.getElementById('main'), data.cards[e.target.innerHTML]);
};

window.addEventListener('DOMContentLoaded', () => {
  StartButton.create();
  Switch.create();
  LocalStorage.createStatistics(data.cards);
  Menu.create(onMenuItemClick);
  Category.createList(onMenuItemClick);
});
