const HtmlHelper = require('../utils/HtmlHelper');
const Words = require('../utils/Words');

const changeActiveElement = (elem) => {
  const active = document.getElementsByClassName('active');
  while (active[0]) {
    active[0].classList.remove('active');
  }
  document.getElementById(elem).classList.add('active');
};

const toggleMenu = () => {
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

const createButtons = (onStatisticsClick, onMainClick, onExactCategoryClick) => {
  const container = document.getElementById('menuContainer');

  const statistics = HtmlHelper.create({
    text: 'statistics',
    id: 'menustatistics',
    name: 'div',
    data: { name: 'statistics' },
    handleClick: onStatisticsClick,
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
    id: 'menumain',
    name: 'div',
    className: 'menu-button',
    handleClick: onMainClick,
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
        handleClick: onExactCategoryClick,
        data: { name: category },
        className: 'menu-button',
      }),
    );
  });
};

const create = (onStatisticsClick, onMainClick, onExactCategoryClick) => {
  const icon = HtmlHelper.create({
    id: 'menuIcon',
    name: 'div',
    data: { open: false },
    handleClick: toggleMenu,
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
  createButtons(onStatisticsClick, onMainClick, onExactCategoryClick);
};

module.exports = {
  create,
  createButtons,
  close,
  changeActiveElement,
};
