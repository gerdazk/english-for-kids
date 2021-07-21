const Words = require('./Words');
const HtmlHelper = require('./HtmlHelper');
const Statistics = require('./Statistics');

const handleClick = () => {
  const menu = document.getElementById('menuIcon');
  const data = JSON.parse(menu.getAttribute('data'));
  if (data.open) {
    data.open = false;
    document.getElementById('menuContainer').style.display = 'none';
  } else {
    data.open = true;
    document.getElementById('menuContainer').style.display = 'block';
  }
  menu.setAttribute('data', JSON.stringify(data));
};

const onStatisticsClick = () => {
  HtmlHelper.clearHtml('main');
  Statistics.create();
};

const close = () => {
  const menu = document.getElementById('menuIcon');
  const data = JSON.parse(menu.getAttribute('data'));
  data.open = false;
  menu.setAttribute('data', JSON.stringify(data));
  document.getElementById('menuContainer').style.display = 'none';
};

const createButtons = (onMenuClick) => {
  Words.getAllCategories().forEach((category) => {
    HtmlHelper.append(
      document.getElementById('menuContainer'),
      HtmlHelper.create({
        text: category, id: `menu${category}`, name: 'div', handleClick: onMenuClick, data: { name: category }, className: 'menu-button',
      }),
    );
  });
  HtmlHelper.append(
    document.getElementById('menuContainer'),
    HtmlHelper.create({
      text: 'statistics', id: 'menuStatistics', name: 'div', handleClick: onStatisticsClick, className: 'menu-button',
    }),
  );
};

const create = (onMenuClick) => {
  HtmlHelper.append(
    document.getElementById('nav'),
    HtmlHelper.create({
      text: 'menu',
      id: 'menuIcon',
      name: 'div',
      data: { open: false },
      handleClick,
    }),
  );
  HtmlHelper.append(
    document.getElementById('nav'),
    HtmlHelper.create({ id: 'menuContainer', name: 'div', className: 'menu-container' }),
  );
  document.getElementById('menuContainer').style.display = 'none'; // naudok klases, ne stilius
  createButtons(onMenuClick);
};

module.exports = { create, createButtons, close };
