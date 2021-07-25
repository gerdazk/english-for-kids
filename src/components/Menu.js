const HtmlHelper = require('../utils/HtmlHelper');
const Words = require('../utils/Words');

const changeActiveElement = (elem) => {
  const active = document.getElementsByClassName('active');
  while (active[0]) {
    HtmlHelper.toggleClassList(active[0].id, 'active', 'remove');
    // active[0].classList.remove('active');
  }
  HtmlHelper.toggleClassList(elem, 'active', 'add');
  // document.getElementById(elem).classList.add('active');
};

const open = (value) => {
  // const menu = document.getElementById('menuContainer');
  if (value) {
    HtmlHelper.toggleClassList('menuContainer', 'show', 'add');
    // menu.classList.add('show');
  } else {
    HtmlHelper.toggleClassList('menuContainer', 'show', 'remove');
    // menu.classList.remove('show');
  }
};

const toggleMenu = () => {
  const menu = document.getElementById('menuIcon');
  const data = JSON.parse(menu.getAttribute('data'));
  if (data.open) {
    data.open = false;
    open(false);
  } else {
    data.open = true;
    open(true);
  }
  menu.setAttribute('data', JSON.stringify(data));
};

const close = () => {
  const menu = document.getElementById('menuIcon');
  const data = JSON.parse(menu.getAttribute('data'));
  data.open = false;
  menu.setAttribute('data', JSON.stringify(data));
  open(false);
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
  const nav = document.getElementById('nav');
  HtmlHelper.append(nav, icon);
  HtmlHelper.append(icon, image);
  HtmlHelper.append(nav, container);
  open(false);
  createButtons(onStatisticsClick, onMainClick, onExactCategoryClick);
};

module.exports = {
  create,
  createButtons,
  close,
  changeActiveElement,
};
