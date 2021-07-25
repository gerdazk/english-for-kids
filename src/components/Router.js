const HtmlHelper = require('../utils/HtmlHelper');
const Category = require('./Category');
const Statistics = require('./Statistics');
const Main = require('./Main');
const Menu = require('./Menu');
const StartButton = require('./buttons/StartButton');
const LocalStorage = require('../utils/LocalStorage');
const Stars = require('./Stars');

const afterRouteCompleted = (name) => {
  localStorage.setItem('currentPage', name);
  Menu.changeActiveElement(`menu${name}`);
  Menu.close();
};

const navigateToExactCategory = (e) => {
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

const navigateToGameMode = () => {
  const currentPage = localStorage.getItem('currentPage');
  if (LocalStorage.getSwitch() === 'train') {
    LocalStorage.setSwitch('switch', 'play');
    if (currentPage !== 'main' && currentPage !== 'statistics') {
      StartButton.toggleDisplay(true);
      HtmlHelper.clearHtml('main');
      Stars.create();
      Category.create(document.getElementById('main'), localStorage.getItem('currentPage'));
    } else {
      StartButton.toggleDisplay(false);
    }
  } else {
    LocalStorage.setSwitch('switch', 'train');
    StartButton.toggleDisplay(false);
    if (currentPage !== 'main' && currentPage !== 'statistics') {
      HtmlHelper.clearHtml('main');
      Category.create(document.getElementById('main'), localStorage.getItem('currentPage'));
    }
  }
};

module.exports = {
  navigateToExactCategory,
  navigateToStatistics,
  navigateToMain,
  navigateToGameMode,
};
