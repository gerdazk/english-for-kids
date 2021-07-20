require('./styles.css');

const Category = require('./Category');
const Switch = require('./Switch');
const data = require('./data');
const StartButton = require('./StartButton');
const LocalStorage = require('./LocalStorage');
const Menu = require('./Menu');
const HtmlHelper = require('./HtmlHelper');
const Reset = require('./Reset');

const onMenuItemClick = (e) => {
  HtmlHelper.clearHtml('main');
  const clickedData = JSON.parse(e.target.getAttribute('data')).name;
  console.log('clickeddata', clickedData);
  Category.create(document.getElementById('main'), data.cards[clickedData]);
  if (!document.getElementById('switch')) {
    Switch.create();
  }
  localStorage.setItem('currentPage', clickedData);
};

window.addEventListener('DOMContentLoaded', () => {
  StartButton.create();
  LocalStorage.createStatistics(data.cards);
  Menu.create(onMenuItemClick);
  Category.createList(onMenuItemClick);
  Reset.create();
});
