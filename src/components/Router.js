const HtmlHelper = require('../utils/HtmlHelper');
const Category = require('./Category');
const Statistics = require('./Statistics');
const Main = require('./Main');
const Menu = require('./Menu');
const LocalStorage = require('../utils/LocalStorage');
const Stars = require('./Stars');

const afterRouteCompleted = (name) => {
  localStorage.setItem('currentPage', name);
  Menu.changeActiveElement(`menu${name}`);
  Menu.close();
};

const navigateToExactCategory = (e) => {
  HtmlHelper.clearHtml('main');
  HtmlHelper.toggleVisibility('reset', false);
  const { name } = HtmlHelper.getElementData(e.currentTarget);
  Category.create(name);
  afterRouteCompleted(name);
};

const navigateToStatistics = () => {
  HtmlHelper.clearHtml('main');
  HtmlHelper.toggleVisibility('reset', false);
  Statistics.create();
  afterRouteCompleted('statistics');
};

const navigateToMain = () => {
  HtmlHelper.clearHtml('main');
  Main.create(navigateToExactCategory, navigateToStatistics);
  afterRouteCompleted('main');
};

const navigateToGameMode = () => {
  const currentPage = localStorage.getItem('currentPage');
  if (LocalStorage.getSwitch() === 'train') {
    LocalStorage.setSwitch('play');
    if (currentPage !== 'main' && currentPage !== 'statistics') {
      HtmlHelper.toggleVisibility('start', true);
      HtmlHelper.clearHtml('main');
      Stars.create();
      Category.create(localStorage.getItem('currentPage'));
    } else {
      HtmlHelper.toggleVisibility('start', false);
    }
  } else {
    LocalStorage.setSwitch('train');
    HtmlHelper.toggleVisibility('start', false);
    if (currentPage !== 'main' && currentPage !== 'statistics') {
      HtmlHelper.clearHtml('main');
      Category.create(localStorage.getItem('currentPage'));
    }
  }
};

module.exports = {
  navigateToExactCategory,
  navigateToStatistics,
  navigateToMain,
  navigateToGameMode,
};
