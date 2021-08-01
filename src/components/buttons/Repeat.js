const HtmlHelper = require('../../utils/HtmlHelper');

const create = (handleClick) => {
  if (HtmlHelper.getElement('repeat')) return;
  HtmlHelper.append(
    document.body,
    HtmlHelper.create({
      name: 'button',
      text: 'Repeat difficult words',
      id: 'repeat',
      handleClick,
      className: 'button-blue',
    }),
  );
  HtmlHelper.toggleVisibility('repeat', false);
};

module.exports = { create };
