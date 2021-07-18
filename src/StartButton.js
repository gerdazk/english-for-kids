const HtmlHelper = require('./HtmlHelper');

const create = () => {
  HtmlHelper.append(document.body, HtmlHelper.create({
    name: 'button', text: 'start', id: 'start',
  }));
};

module.exports = { create };
