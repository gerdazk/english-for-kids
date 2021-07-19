const Card = require('./Card');
const HtmlHelper = require('./HtmlHelper');
const data = require('./data');

function create(parent, item) {
  const keys = Object.keys(item);
  for (let j = 0; j < keys.length; j += 1) {
    Card.create(parent, item[keys[j]]);
  }
  return document.getElementById('main');
}

const createList = (onMenuClick) => {
  const list = data.getAllCategories();
  list.map((item) => {
    HtmlHelper.append(
      document.getElementById('main'),
      HtmlHelper.create({
        text: item,
        name: 'button',
        handleClick: onMenuClick,
      }),
    );
    return document.getElementById('main');
  });
};

module.exports = { create, createList };
