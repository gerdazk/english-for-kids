require('./styles.css');

const Category = require('./Category');
const Switch = require('./buttons/Switch');
const Words = require('./Words');
const StartButton = require('./buttons/StartButton');
const LocalStorage = require('./LocalStorage');
const Menu = require('./Menu');
const HtmlHelper = require('./HtmlHelper');
const Reset = require('./buttons/Reset');
const Statistics = require('./Statistics');

const onCategoryClick = (e) => {
  HtmlHelper.clearHtml('main');
  HtmlHelper.toggleVisibility('reset', true);
  const { name } = JSON.parse(e.currentTarget.getAttribute('data'));
  if (name === 'statistics') {
    Statistics.create();
    localStorage.setItem('currentPage', 'statistics');
    Menu.changeActiveElement('menuStatistics');
    Menu.close();
  } else {
    Menu.changeActiveElement(`menu${name}`);
    Category.createWords(document.getElementById('main'), name);
  }
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
