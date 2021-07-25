const HtmlHelper = require('../utils/HtmlHelper');

const create = () => {
  HtmlHelper.append(document.body, HtmlHelper.create({
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
