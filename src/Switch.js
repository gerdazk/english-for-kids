const HtmlHelper = require('./HtmlHelper');
const LocalStorage = require('./LocalStorage');

const handleClick = () => {
  if (LocalStorage.getSwitch('switch') === 'train') {
    LocalStorage.setSwitch('switch', 'play');
    document.getElementById('switch').innerHTML = 'play';
  } else {
    LocalStorage.setSwitch('switch', 'train');
    document.getElementById('switch').innerHTML = 'train';
  }
};

function create() {
  LocalStorage.setSwitch('switch', 'train');
  const text = LocalStorage.getSwitch('switch');
  HtmlHelper.append(document.body, HtmlHelper.create({
    name: 'button', text, type: 'checkbox', id: 'switch', handleClick,
  }));
}

module.exports = { create };
