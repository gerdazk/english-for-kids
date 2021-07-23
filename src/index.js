require('./styles.css');

const Category = require('./Category');
const Switch = require('./buttons/Switch');
const Words = require('./Words');
const StartButton = require('./buttons/StartButton');
const LocalStorage = require('./LocalStorage');
const Menu = require('./Menu');
const HtmlHelper = require('./HtmlHelper');
const Reset = require('./buttons/Reset');

const onCategoryClick = (e) => {
  HtmlHelper.clearHtml('main');
  const { name } = JSON.parse(e.target.getAttribute('data'));
  // setTimeout(() => { Category.createWords(document.getElementById('main'), name); }, 100);
  Category.createWords(document.getElementById('main'), name);
  localStorage.setItem('currentPage', name);
  Menu.close();
};

window.addEventListener('DOMContentLoaded', () => {
  StartButton.create();
  LocalStorage.createStatistics(Words.cards);
  Menu.create(onCategoryClick);
  Category.createList(onCategoryClick);
  localStorage.setItem('currentPage', 'main');
  Reset.create();
  Switch.create();
});
