const HtmlHelper = require('../utils/HtmlHelper');
const Words = require('../utils/Words');

const changeActiveElement = (elem) => {
  const active = document.getElementsByClassName('active');
  while (active[0]) {
    HtmlHelper.toggleClassList(active[0].id, 'active', 'remove');
  }
  HtmlHelper.toggleClassList(elem, 'active', 'add');
};

const open = (value) => {
  if (value) {
    HtmlHelper.toggleClassList('menuContainer', 'show', 'add');
  } else {
    HtmlHelper.toggleClassList('menuContainer', 'show', 'remove');
  }
};

const toggleMenu = () => {
  const menu = HtmlHelper.getElement('menuIcon');
  const data = HtmlHelper.getElementData(menu);
  if (data.open) {
    data.open = false;
    open(false);
  } else {
    data.open = true;
    open(true);
  }
  HtmlHelper.setElementData(menu, data);
  // menu.setAttribute('data', JSON.stringify(data));
};

const close = () => {
  const menu = HtmlHelper.getElement('menuIcon');
  const data = HtmlHelper.getElementData(menu);
  data.open = false;
  HtmlHelper.setElementData(menu, data);
  // menu.setAttribute('data', JSON.stringify(data));
  open(false);
};

const createButtons = (
  onStatisticsClick,
  onMainClick,
  onExactCategoryClick,
) => {
  const container = HtmlHelper.getElement('menuContainer');

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
    id: 'menuIconImage',
  });
  const container = HtmlHelper.create({
    id: 'menuContainer',
    name: 'div',
    className: 'menu-container',
  });
  const nav = HtmlHelper.getElement('nav');
  HtmlHelper.append(nav, icon);
  HtmlHelper.append(icon, image);
  HtmlHelper.append(nav, container);
  open(false);
  document.addEventListener('click', (e) => {
    if (
      e.target.id !== 'menuContainer'
      && !container.contains(e.target)
      && e.target.id !== 'menuIcon'
      && e.target.id !== 'menuIconImage'
    ) {
      close();
    }
  });
  createButtons(onStatisticsClick, onMainClick, onExactCategoryClick);
};

module.exports = {
  create,
  createButtons,
  close,
  changeActiveElement,
};
