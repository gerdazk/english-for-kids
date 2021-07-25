const HtmlHelper = require('../../utils/HtmlHelper');
const LocalStorage = require('../../utils/LocalStorage');

function create(handleChange) {
  LocalStorage.setSwitch('train');
  const button = HtmlHelper.getElement('switch');
  HtmlHelper.getElement('checkbox').addEventListener('change', handleChange);
  HtmlHelper.append(HtmlHelper.getElement('nav'), button);
}

module.exports = { create };
