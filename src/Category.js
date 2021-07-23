const Card = require('./Card');
const HtmlHelper = require('./HtmlHelper');
const Words = require('./Words');

function createWords(parent, categoryName) {
  const words = Words.getCardsByCategory(categoryName);
  words.forEach((word) => Card.create(parent, word));
}

const createList = (onMenuClick) => {
  const list = Words.getAllCategories();
  list.map((item) => {
    HtmlHelper.append(
      document.getElementById('main'),
      HtmlHelper.create({
        text: item,
        name: 'div',
        handleClick: onMenuClick,
        data: { name: item },
        className: 'card-container',
      }),
    );
    return document.getElementById('main');
  });
};

module.exports = { createWords, createList };
