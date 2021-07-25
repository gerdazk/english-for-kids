const HtmlHelper = require('../../utils/HtmlHelper');
const LocalStorage = require('../../utils/LocalStorage');

function create(handleChange) {
  LocalStorage.setSwitch('train');
  const button = document.getElementById('switch');
  document.getElementById('checkbox').addEventListener('change', handleChange);
  HtmlHelper.append(document.getElementById('nav'), button);
}

module.exports = { create };
