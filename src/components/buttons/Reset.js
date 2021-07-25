const { HtmlHelper } = require('../../utils');

const create = (handleClick) => {
  if (document.getElementById('reset')) return;
  HtmlHelper.append(
    document.body,
    HtmlHelper.create({
      name: 'button',
      text: 'reset',
      id: 'reset',
      handleClick,
      className: 'button-blue',
    }),
  );
  HtmlHelper.toggleVisibility('reset', false);
};

module.exports = { create };
