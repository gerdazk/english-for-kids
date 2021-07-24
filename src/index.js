require('./styles.css');

// const Switch = require('./components/buttons/Switch');
const StartButton = require('./components/buttons/StartButton');
const LocalStorage = require('./utils/LocalStorage');
const Menu = require('./components/Menu');
const Router = require('./components/Router');

window.addEventListener('DOMContentLoaded', () => {
  Menu.create(
    Router.navigateToStatistics,
    Router.navigateToMain,
    Router.navigateToExactCategory,
  );
  Router.navigateToMain();
  LocalStorage.createStatistics();
  StartButton.create();
  // Switch.create();
});
