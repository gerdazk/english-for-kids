const Card = require('./Card');
const HtmlHelper = require('./HtmlHelper');
const data = require('./data');

function create(parent, item) {
  item.map((card) => Card.create(parent, card));
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
        data: { name: item },
      }),
    );
    return document.getElementById('main');
  });
};

const showResults = () => {
  HtmlHelper.clearHtml('main');
  HtmlHelper.append(
    document.getElementById('main'),
    HtmlHelper.create({
      name: 'div',
      text: `Total errors: ${localStorage.getItem('totalErrors')}`,
    }),
  );
};

module.exports = { create, createList, showResults };
