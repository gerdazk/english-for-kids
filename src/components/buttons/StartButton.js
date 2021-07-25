const HtmlHelper = require('../../utils/HtmlHelper');
const LocalStorage = require('../../utils/LocalStorage');
const SoundPlayer = require('../../utils/SoundPlayer');
const Words = require('../../utils/Words');

const resetDisabled = () => {
  const disabled = document.getElementsByClassName('disabled');
  while (disabled[0]) {
    disabled[0].classList.remove('disabled');
  }
  let data;
  let element;
  const collection = Words.getData()[localStorage.getItem('currentPage')];
  collection.forEach((elem) => {
    element = document.getElementById(`${elem.name}Container`);
    data = JSON.parse(element.getAttribute('data'));
    data.disabled = false;
    element.setAttribute('data', JSON.stringify(data));
  });
};

const handleClick = () => {
  LocalStorage.changeRandomCard(undefined);
  localStorage.setItem('activeGame', true);
  localStorage.setItem('totalErrors', 0);
  resetDisabled();
  setTimeout(() => { SoundPlayer.playRandom(Words.getData()[localStorage.getItem('currentPage')]); }, 1000);
};

const create = () => {
  HtmlHelper.append(document.body, HtmlHelper.create({
    name: 'button', text: 'start', id: 'start', handleClick, className: 'button-blue',
  }));
  HtmlHelper.toggleVisibility('start', false);
};

module.exports = { create };
