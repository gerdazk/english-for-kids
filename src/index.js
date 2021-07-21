require('./styles.css');

const Category = require('./Category');
const Switch = require('./Switch');
const Words = require('./Words');
const StartButton = require('./StartButton');
const LocalStorage = require('./LocalStorage');
const Menu = require('./Menu');
const HtmlHelper = require('./HtmlHelper');
const Reset = require('./Reset');

const onCategoryClick = (e) => {
  HtmlHelper.clearHtml('main');
  const { name } = JSON.parse(e.target.getAttribute('data'));
  Category.createWords(document.getElementById('main'), name);
  localStorage.setItem('currentPage', name);
  Menu.close();
};

window.addEventListener('DOMContentLoaded', () => {
  StartButton.create();
  LocalStorage.createStatistics(Words.cards);
  Menu.create(onCategoryClick);
  Category.createList(onCategoryClick);
  Reset.create();
  Switch.create();
});
