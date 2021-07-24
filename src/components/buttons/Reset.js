const { HtmlHelper } = require('../../utils');

const create = (handleClick) => {
  // TODO: patikrinti ar jau egzistuoja, jeigu egzistuoja, neprideti
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
