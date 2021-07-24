const HtmlHelper = require('../utils/HtmlHelper');
const Category = require('./Category');
const Statistics = require('./Statistics');
const Main = require('./Main');
const Menu = require('./Menu');

const afterRouteCompleted = (name) => {
  localStorage.setItem('currentPage', name);
  const collection = document.getElementsByClassName('active');
  while (collection[0]) {
    collection[0].classList.remove('active');
  }
  document.getElementById(`menu${name}`).classList.add('active');
  Menu.close();
  // set to localstorage currentpage   localStorage.setItem('currentPage', 'main');
  // close menu
  // ettc
  // todo:
};

const navigateToExactCategory = (e) => {
  console.log('op');
  HtmlHelper.clearHtml('main');
  HtmlHelper.toggleVisibility('reset', true);
  const { name } = HtmlHelper.getElementData(e.currentTarget);
  Category.create(document.getElementById('main'), name);
  afterRouteCompleted(name);
};

const navigateToStatistics = () => {
  HtmlHelper.clearHtml('main');
  HtmlHelper.toggleVisibility('reset', true);
  Statistics.create();
  afterRouteCompleted('statistics');
};

const navigateToMain = () => {
  HtmlHelper.clearHtml('main');
  Main.create(navigateToExactCategory, navigateToStatistics);
  afterRouteCompleted('main');
};

module.exports = {
  navigateToExactCategory,
  navigateToStatistics,
  navigateToMain,
};
