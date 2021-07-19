const HtmlHelper = require('./HtmlHelper');
const SoundPlayer = require('./SoundPlayer');
const data = require('./data');

const handleClick = () => {
  console.log('labas startai');
  SoundPlayer.playRandom(data.cards[localStorage.getItem('currentPage')]);
};

const create = () => {
  HtmlHelper.append(document.body, HtmlHelper.create({
    name: 'button', text: 'start', id: 'start', handleClick,
  }));
  document.getElementById('start').style.display = 'none';
};

const toggleDisplay = (state) => {
  if (state) {
    document.getElementById('start').style.display = 'inline-block';
  } else {
    document.getElementById('start').style.display = 'none';
  }
};

module.exports = { create, toggleDisplay };
