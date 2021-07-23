const HtmlHelper = require('../HtmlHelper');
const LocalStorage = require('../LocalStorage');
const SoundPlayer = require('../SoundPlayer');
const data = require('../Words');

const handleClick = () => {
  LocalStorage.changeRandomCard(null);
  localStorage.setItem('activeGame', true);
  localStorage.setItem('totalErrors', 0);
  // nuimti disabled nuo visu
  SoundPlayer.playRandom(data.cards[localStorage.getItem('currentPage')]);
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
