const Words = require('../utils/Words');
const HtmlHelper = require('../utils/HtmlHelper');

const createStatisticsButton = (navigateToStatistics) => {
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
    handleClick: navigateToStatistics,
    data: { name: 'statistics' },
  });
  HtmlHelper.append(parent, image);
  HtmlHelper.append(parent, element);
  HtmlHelper.append(HtmlHelper.getElement('main'), parent);
};

const create = (navigateToExactCategory, navigateToStatistics) => {
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
      handleClick: navigateToExactCategory,
      data: { name: item },
    });
    HtmlHelper.append(parent, image);
    HtmlHelper.append(parent, element);
    HtmlHelper.append(HtmlHelper.getElement('main'), parent);
  });

  createStatisticsButton(navigateToStatistics);
};

module.exports = { create };
