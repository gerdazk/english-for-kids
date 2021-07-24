const { HtmlHelper, LocalStorage } = require('../../utils');
const StartButton = require('./StartButton');
const Category = require('../Category');

const handleClick = () => {
  if (LocalStorage.getSwitch() === 'train') {
    LocalStorage.setSwitch('switch', 'play');
    // HtmlHelper.changeInnerText('switch', 'play');
    const currentPage = localStorage.getItem('currentPage');
    if (currentPage !== 'main' && currentPage !== 'statistics') {
      StartButton.toggleDisplay(true);
    } else {
      StartButton.toggleDisplay(false);
    }
  } else {
    LocalStorage.setSwitch('switch', 'train');
    StartButton.toggleDisplay(false);
  }
  HtmlHelper.clearHtml('main');
  Category.create(document.getElementById('main'), localStorage.getItem('currentPage'));
};

function create() {
  LocalStorage.setSwitch('switch', 'train');
  const button = document.getElementById('switch');
  button.addEventListener('click', handleClick, false);
  HtmlHelper.append(document.getElementById('nav'), button);
  // const text = LocalStorage.getSwitch();
  // HtmlHelper.append(
  //   document.getElementById('nav'),
  //   HtmlHelper.create({
  //     name: 'button',
  //     text,
  //     attributes: [{ name: 'type', value: 'checkbox' }],
  //     id: 'switch',
  //     handleClick,
  //   }),
  // );
}

module.exports = { create };
