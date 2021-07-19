const data = require('./data');
const HtmlHelper = require('./HtmlHelper');
const Statistics = require('./Statistics');

const handleClick = () => {
  const menu = document.getElementById('menuIcon');
  const menuData = JSON.parse(menu.getAttribute('data'));
  console.log(menuData.open);
  if (menuData.open) {
    menuData.open = false;
    document.getElementById('menuContainer').style.display = 'none';
  } else {
    menuData.open = true;
    document.getElementById('menuContainer').style.display = 'block';
  }
  menu.setAttribute('data', JSON.stringify(menuData));
};

const onStatisticsClick = () => {
  Statistics.create(data);
};

const createButtons = (onMenuClick) => {
  data.getAllCategories().forEach((category) => {
    HtmlHelper.append(
      document.getElementById('menuContainer'),
      HtmlHelper.create({
        text: category, id: `menu${category}`, name: 'button', handleClick: onMenuClick,
      }),
    );
  });
  HtmlHelper.append(
    document.getElementById('menuContainer'),
    HtmlHelper.create({
      text: 'statistics', id: 'menuStatistics', name: 'button', handleClick: onStatisticsClick,
    }),
  );
};

const create = (onMenuClick) => {
  HtmlHelper.append(
    document.body,
    HtmlHelper.create({
      text: 'menu',
      id: 'menuIcon',
      name: 'div',
      data: { open: false },
      handleClick,
    }),
  );
  HtmlHelper.append(
    document.body,
    HtmlHelper.create({ id: 'menuContainer', name: 'div' }),
  );
  document.getElementById('menuContainer').style.display = 'none';
  createButtons(onMenuClick);
};

module.exports = { create, createButtons };
