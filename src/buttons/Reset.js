const HtmlHelper = require('../HtmlHelper');
const LocalStorage = require('../LocalStorage');
const Statistics = require('../Statistics');

const handleClick = () => {
  LocalStorage.createStatistics();
  HtmlHelper.clearHtml('main');
  Statistics.create();
};

const create = () => {
  HtmlHelper.append(
    document.body,
    HtmlHelper.create({
      name: 'button',
      text: 'reset',
      id: 'reset',
      handleClick,
    }),
  );
  HtmlHelper.toggleVisibility('reset', true);
  // document.getElementById('reset').style.display = 'none';
  // todo. html helperis tai daro ir su klasem
};

module.exports = { create };
