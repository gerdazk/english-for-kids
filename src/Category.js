const Card = require('./Card');
const HtmlHelper = require('./HtmlHelper');
const Words = require('./Words');

function createWords(parent, categoryName) {
  const words = Words.getCardsByCategory(categoryName);
  words.forEach((word) => Card.create(parent, word));
}

const statisticsButton = (onCategoryClick) => {
  const element = HtmlHelper.create({
    text: 'statistics',
    name: 'div',
    className: 'card',
  });
  const image = HtmlHelper.create({
    name: 'img',
    attributes: [{ name: 'src', value: './assets/img/statistics.jpg' }],
  });
  const parent = HtmlHelper.create({
    name: 'div',
    className: 'card-container',
    handleClick: onCategoryClick,
    data: { name: 'statistics' },
  });
  HtmlHelper.append(parent, image);
  HtmlHelper.append(parent, element);
  HtmlHelper.append(document.getElementById('main'), parent);
};

const createList = (onCategoryClick) => {
  const list = Words.getAllCategories();
  let element;
  let parent;
  let image;
  list.forEach((item) => {
    element = HtmlHelper.create({
      text: item,
      name: 'div',
      className: 'card',
    });
    image = HtmlHelper.create({
      name: 'img',
      attributes: [{ name: 'src', value: `./assets/img/${item}.jpg` }],
    });
    parent = HtmlHelper.create({
      name: 'div',
      className: 'card-container',
      handleClick: onCategoryClick,
      data: { name: item },
    });
    HtmlHelper.append(parent, image);
    HtmlHelper.append(parent, element);
    HtmlHelper.append(document.getElementById('main'), parent);
  });
  statisticsButton(onCategoryClick);
};

module.exports = { createWords, createList };
