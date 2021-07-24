const HtmlHelper = require('../../utils/HtmlHelper');
const LocalStorage = require('../../utils/LocalStorage');

function create(handleChange) {
  LocalStorage.setSwitch('switch', 'train');
  const button = document.getElementById('switch');
  document.getElementById('checkbox').addEventListener('change', handleChange);
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
