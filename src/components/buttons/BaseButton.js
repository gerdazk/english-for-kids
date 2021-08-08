const HtmlHelper = require('../../utils/HtmlHelper');

const create = (id, text, handleClick) => {
  if (HtmlHelper.getElement(id)) return;
  HtmlHelper.append(
    document.body,
    HtmlHelper.create({
      name: 'button',
      text,
      id,
      handleClick,
      className: 'button-blue',
    }),
  );
  HtmlHelper.toggleVisibility(id, false);
};

module.exports = { create };
