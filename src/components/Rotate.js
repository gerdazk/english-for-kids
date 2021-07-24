const { LocalStorage, HtmlHelper } = require('../utils');

const handleClick = (e) => {
  const data = JSON.parse(e.target.parentElement.getAttribute('data'));
  localStorage.setItem('activeGame', false);
  HtmlHelper.changeInnerText(data.name, data.nameLT);
  LocalStorage.changeStatistics(data.name, 'clicked');
};

const create = (parent, data) => {
  const container = HtmlHelper.create({
    name: 'div', className: 'rotate', handleClick, data, id: 'rotate',
  });
  const image = HtmlHelper.create({
    name: 'img', className: 'rotate-image', id: 'rotate-image', attributes: [{ name: 'src', value: './assets/img/rotate.png' }],
  });
  HtmlHelper.append(container, image);
  HtmlHelper.append(parent, container);
};

module.exports = { create };
