const Words = require('./Words');
const HtmlHelper = require('./HtmlHelper');
// const Statistics = require('./Statistics');
const Category = require('./Category');

const changeActiveElement = (elem) => {
  const active = document.getElementsByClassName('active');
  while (active[0]) {
    active[0].classList.remove('active');
  }
  document.getElementById(elem).classList.add('active');
};

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

// const onStatisticsClick = () => {
//   HtmlHelper.clearHtml('main');
//   Statistics.create();
//   localStorage.setItem('currentPage', 'statistics');
//   changeActiveElement('menuStatistics');
//   close();
// };

const createButtons = (onMenuClick) => {
  const container = document.getElementById('menuContainer');

  const statistics = HtmlHelper.create({
    text: 'statistics',
    id: 'menuStatistics',
    name: 'div',
    data: { name: 'statistics' },
    handleClick: onMenuClick,
    className: 'menu-button',
  });

  const closeButton = HtmlHelper.create({
    id: 'close',
    name: 'div',
    handleClick: close,
    className: 'menu-button',
  });

  const closeIcon = HtmlHelper.create({
    name: 'img',
    attributes: [{ name: 'src', value: './assets/img/close.png' }],
    className: 'close-icon',
  });

  const main = HtmlHelper.create({
    text: 'main',
    id: 'menuMain',
    name: 'div',
    className: 'menu-button',
    handleClick: () => {
      HtmlHelper.clearHtml('main');
      Category.createList(onMenuClick);
      changeActiveElement('menuMain');
      close();
    },
  });
  HtmlHelper.append(closeButton, closeIcon);
  HtmlHelper.append(container, closeButton);
  HtmlHelper.append(container, main);
  HtmlHelper.append(container, statistics);

  Words.getAllCategories().forEach((category) => {
    HtmlHelper.append(
      container,
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

module.exports = {
  create, createButtons, close, changeActiveElement,
};
