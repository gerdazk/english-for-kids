const Words = require('./Words');
const HtmlHelper = require('./HtmlHelper');
const Statistics = require('./Statistics');

const handleClick = () => {
  const menu = document.getElementById('menuIcon');
  const data = JSON.parse(menu.getAttribute('data'));
  if (data.open) {
    data.open = false;
    HtmlHelper.toggleVisibility('menuContainer', true);
  } else {
    data.open = true;
    HtmlHelper.toggleVisibility('menuContainer', false);
  }
  menu.setAttribute('data', JSON.stringify(data));
};

const close = () => {
  const menu = document.getElementById('menuIcon');
  const data = JSON.parse(menu.getAttribute('data'));
  data.open = false;
  menu.setAttribute('data', JSON.stringify(data));
  HtmlHelper.toggleVisibility('menuContainer', true);
};

const onStatisticsClick = () => {
  HtmlHelper.clearHtml('main');
  Statistics.create();
  localStorage.setItem('currentPage', 'statistics');
  close();
};

const createButtons = (onMenuClick) => {
  Words.getAllCategories().forEach((category) => {
    HtmlHelper.append(
      document.getElementById('menuContainer'),
      HtmlHelper.create({
        text: category,
        id: `menu${category}`,
        name: 'div',
        handleClick: onMenuClick,
        data: { name: category },
        className: 'menu-button',
      }),
    );
  });
  HtmlHelper.append(
    document.getElementById('menuContainer'),
    HtmlHelper.create({
      text: 'statistics',
      id: 'menuStatistics',
      name: 'div',
      handleClick: onStatisticsClick,
      className: 'menu-button',
    }),
  );
};

const create = (onMenuClick) => {
  const icon = HtmlHelper.create({
    id: 'menuIcon',
    name: 'div',
    data: { open: false },
    handleClick,
    className: 'menu-burger',
  });
  const image = HtmlHelper.create({
    name: 'img',
    attributes: [{ name: 'src', value: './assets/img/menu.png' }],
    className: 'menu-icon',
  });
  const container = HtmlHelper.create({
    id: 'menuContainer',
    name: 'div',
    className: 'menu-container',
  });

  HtmlHelper.append(document.getElementById('nav'), icon);
  HtmlHelper.append(icon, image);
  HtmlHelper.append(document.getElementById('nav'), container);

  HtmlHelper.toggleVisibility('menuContainer', true);
  createButtons(onMenuClick);
};

module.exports = { create, createButtons, close };
