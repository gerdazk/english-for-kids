const HtmlHelper = require('../../utils/HtmlHelper');
const LocalStorage = require('../../utils/LocalStorage');
const SoundPlayer = require('../../utils/SoundPlayer');
const Words = require('../../utils/Words');

const handleClick = () => {
  LocalStorage.changeRandomCard(null);
  localStorage.setItem('activeGame', true);
  localStorage.setItem('totalErrors', 0);
  // nuimti disabled nuo visu
  SoundPlayer.playRandom(Words.getData[localStorage.getItem('currentPage')]);
};

const create = () => {
  HtmlHelper.append(document.body, HtmlHelper.create({
    name: 'button', text: 'start', id: 'start', handleClick,
  }));
  HtmlHelper.toggleVisibility('start', true);
};

const toggleDisplay = (state) => {
  if (state) {
    HtmlHelper.toggleVisibility('start', false);
  } else {
    HtmlHelper.toggleVisibility('start', true);
  }
};

module.exports = { create, toggleDisplay };
