const HtmlHelper = require('../utils/HtmlHelper');
const Category = require('./Category');
const Statistics = require('./Statistics');
const Main = require('./Main');
const Menu = require('./Menu');
const LocalStorage = require('../utils/LocalStorage');
const Stars = require('./Stars');

const afterRouteCompleted = (name) => {
  Menu.changeActiveElement(`menu${name}`);
  Menu.close();
};

const setGameMode = () => {
  const currentPage = localStorage.getItem('currentPage');
  if (currentPage !== 'main' && currentPage !== 'statistics') {
    HtmlHelper.clearHtml('main');
    Stars.create();
    Category.create(currentPage);
    HtmlHelper.clearHtml('start');
    HtmlHelper.changeInnerText('start', 'start game');
    HtmlHelper.toggleVisibility('start', true);
  }
};

const navigateToExactCategory = (e) => {
  HtmlHelper.clearHtml('main');
  HtmlHelper.toggleVisibility('reset', false);
  const { name } = HtmlHelper.getElementData(e.currentTarget);
  localStorage.setItem('currentPage', name);
  if (localStorage.getItem('switch') === 'play') {
    setGameMode();
  } else {
    Category.create(name);
  }
  afterRouteCompleted(name);
};

const navigateToStatistics = () => {
  HtmlHelper.clearHtml('main');
  HtmlHelper.toggleVisibility('reset', false);
  localStorage.setItem('currentPage', 'statistics');
  Statistics.create();
  HtmlHelper.toggleVisibility('start', false);
  afterRouteCompleted('statistics');
};

const navigateToMain = () => {
  HtmlHelper.clearHtml('main');
  localStorage.setItem('currentPage', 'main');
  Main.create(navigateToExactCategory, navigateToStatistics);
  HtmlHelper.toggleVisibility('start', false);
  afterRouteCompleted('main');
};

const navigateToGameMode = () => {
  const currentPage = localStorage.getItem('currentPage');
  if (LocalStorage.getSwitch() === 'train') {
    LocalStorage.setSwitch('play');
    HtmlHelper.clearHtml('start');
    HtmlHelper.changeInnerText('start', 'start game');
    setGameMode();
    console.log('setinu i false');
    localStorage.setItem('activeGame', false);
  } else {
    LocalStorage.setSwitch('train');
    HtmlHelper.toggleVisibility('start', false);
    if (currentPage !== 'main' && currentPage !== 'statistics') {
      HtmlHelper.clearHtml('main');
      Category.create(currentPage);
    }
  }
};

module.exports = {
  navigateToExactCategory,
  navigateToStatistics,
  navigateToMain,
  navigateToGameMode,
};
