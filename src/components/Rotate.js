const LocalStorage = require('../utils/LocalStorage');
const HtmlHelper = require('../utils/HtmlHelper');

const handleClick = (e) => {
  const data = HtmlHelper.getElementData(e.target.parentElement);
  HtmlHelper.changeInnerText(data.name, data.translation);
  HtmlHelper.toggleClassList(`${data.name}Container`, 'is-flipped', 'add');
  HtmlHelper.toggleClassList(`${data.name}`, 'is-flipped-child', 'add');
  HtmlHelper.toggleVisibility(`${data.name}rotate`, false);
  LocalStorage.changeStatistics(data.name, 'clicked');
};

const create = (parent, data) => {
  const container = HtmlHelper.create({
    name: 'div', className: 'rotate', id: `${data.name}rotate`, handleClick, data,
  });
  const image = HtmlHelper.create({
    name: 'img', className: 'rotate-image', attributes: [{ name: 'src', value: './assets/img/rotate.png' }],
  });
  HtmlHelper.append(container, image);
  HtmlHelper.append(parent, container);
};

module.exports = { create };
