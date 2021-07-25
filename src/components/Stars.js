const HtmlHelper = require('../utils/HtmlHelper');

const create = () => {
  if (document.getElementById('stars')) return;
  HtmlHelper.append(document.getElementById('main'), HtmlHelper.create({
    name: 'div',
    id: 'stars',
  }));
};

const add = (value) => {
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
  HtmlHelper.append(document.getElementById('stars'), star);
};

module.exports = { create, add };
