const HtmlHelper = require('../utils/HtmlHelper');

const create = () => {
  if (HtmlHelper.getElement('stars')) return;
  HtmlHelper.append(HtmlHelper.getElement('main'), HtmlHelper.create({
    name: 'div',
    id: 'stars',
    className: 'stars',
  }));
};

const add = (value) => {
  const parent = HtmlHelper.getElement('stars');
  let star;
  if (value) {
    star = HtmlHelper.create({
      name: 'img',
      className: 'star',
      attributes: [{ name: 'src', value: '../assets/img/star-correct.png' }],
    });
  } else {
    star = HtmlHelper.create({
      name: 'img',
      className: 'star',
      attributes: [{ name: 'src', value: '../assets/img/star-wrong.png' }],
    });
  }
  HtmlHelper.append(parent, star);
};

module.exports = { create, add };
