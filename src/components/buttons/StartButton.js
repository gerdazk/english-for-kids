const HtmlHelper = require('../../utils/HtmlHelper');
const LocalStorage = require('../../utils/LocalStorage');
const SoundPlayer = require('../../utils/SoundPlayer');
const Words = require('../../utils/Words');
const BaseButton = require('./BaseButton');

const resetDisabled = () => {
  const disabled = document.getElementsByClassName('disabled');
  if (!disabled || disabled.length < 1) {
    return;
  }
  while (disabled[0]) {
    disabled[0].classList.remove('disabled');
  }
  let data;
  let element;
  const collection = Words.getData()[localStorage.getItem('currentPage')];
  collection.forEach((elem) => {
    element = HtmlHelper.getElement(`${elem.name}Container`);
    data = HtmlHelper.getElementData(element);
    data.disabled = false;
    HtmlHelper.setElementData(element, data);
  });
};

const handleClick = () => {
  const isActive = localStorage.getItem('activeGame');
  if (isActive !== 'true') {
    LocalStorage.changeRandomCard(undefined);
    localStorage.setItem('activeGame', true);
    localStorage.setItem('totalErrors', 0);
    HtmlHelper.clearHtml('start');
    HtmlHelper.append(
      HtmlHelper.getElement('start'),
      HtmlHelper.create({
        name: 'img',
        className: 'rotate-image',
        attributes: [{ name: 'src', value: './assets/img/rotate.png' }],
      }),
    );
    resetDisabled();
    const currentPage = localStorage.getItem('currentPage');
    if (currentPage === 'repeat') {
      setTimeout(() => {
        SoundPlayer.playRandom(JSON.parse(localStorage.getItem('difficultWords')));
      }, 1000);
    } else {
      setTimeout(() => {
        SoundPlayer.playRandom(Words.getData()[currentPage]);
      }, 1000);
    }
  } else {
    SoundPlayer.play(localStorage.getItem('randomCard'));
  }
};

const create = () => {
  BaseButton.create('start', 'start game', handleClick);
};

module.exports = { create };
