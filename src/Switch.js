const HtmlHelper = require('./HtmlHelper');
const LocalStorage = require('./LocalStorage');

const handleClick = () => {
  if (LocalStorage.getSwitch('switch') === 'train') {
    LocalStorage.setSwitch('switch', 'play');
    HtmlHelper.changeInnerText('switch', 'play');
  } else {
    LocalStorage.setSwitch('switch', 'train');
    HtmlHelper.changeInnerText('switch', 'train');
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
