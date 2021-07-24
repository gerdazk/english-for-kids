const HtmlHelper = require('../utils/HtmlHelper');
const Category = require('./Category');
const Statistics = require('./Statistics');
const Main = require('./Main');
const Menu = require('./Menu');
const StartButton = require('./buttons/StartButton');
const LocalStorage = require('../utils/LocalStorage');

const afterRouteCompleted = (name) => {
  localStorage.setItem('currentPage', name);
  Menu.changeActiveElement(`menu${name}`);
  // const collection = document.getElementsByClassName('active');
  // while (collection[0]) {
  //   collection[0].classList.remove('active');
  // }
  // document.getElementById(`menu${name}`).classList.add('active');
  Menu.close();
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

const navigateToGameMode = (e) => {
  console.log(document.getElementById('checkbox').checked);
  console.log(e);
  if (LocalStorage.getSwitch() === 'train') {
    LocalStorage.setSwitch('switch', 'play');
    // HtmlHelper.changeInnerText('switch', 'play');
    const currentPage = localStorage.getItem('currentPage');
    if (currentPage !== 'main' && currentPage !== 'statistics') {
      StartButton.toggleDisplay(true);
      HtmlHelper.clearHtml('main');
      Category.create(document.getElementById('main'), localStorage.getItem('currentPage'));
    } else {
      StartButton.toggleDisplay(false);
    }
  } else {
    LocalStorage.setSwitch('switch', 'train');
    StartButton.toggleDisplay(false);
    HtmlHelper.clearHtml('main');
    Category.create(document.getElementById('main'), localStorage.getItem('currentPage'));
  }
};

module.exports = {
  navigateToExactCategory,
  navigateToStatistics,
  navigateToMain,
  navigateToGameMode,
};
