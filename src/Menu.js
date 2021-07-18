const data = require('./data');
const HtmlHelper = require('./HtmlHelper');

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

const create = () => {
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
};

const createButtons = () => {
  const keys = Object.keys(data.cards);
  for (let i = 0; i < keys.length; i += 1) {
    HtmlHelper.append(
      document.getElementById('menuContainer'),
      HtmlHelper.create({ text: keys[i], id: `menu${keys[i]}`, name: 'button' }),
    );
    Object.keys(data.cards[keys[i]]);
  }
};

module.exports = { create, createButtons };
