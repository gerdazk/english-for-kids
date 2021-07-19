const HtmlHelper = require('./HtmlHelper');
const LocalStorage = require('./LocalStorage');
const StartButton = require('./StartButton');

const handleClick = () => {
  if (LocalStorage.getSwitch('switch') === 'train') {
    LocalStorage.setSwitch('switch', 'play');
    HtmlHelper.changeInnerText('switch', 'play');
    StartButton.toggleDisplay(true);
  } else {
    LocalStorage.setSwitch('switch', 'train');
    HtmlHelper.changeInnerText('switch', 'train');
    StartButton.toggleDisplay(false);
  }
};

function create() {
  LocalStorage.setSwitch('switch', 'train');
  const text = LocalStorage.getSwitch('switch');
  HtmlHelper.append(
    document.body,
    HtmlHelper.create({
      name: 'button',
      text,
      type: 'checkbox',
      id: 'switch',
      handleClick,
    }),
  );
}

module.exports = { create };
