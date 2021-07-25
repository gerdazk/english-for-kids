const { LocalStorage, HtmlHelper } = require('../utils');

const handleClick = (e) => {
  const data = JSON.parse(e.target.parentElement.getAttribute('data'));
  localStorage.setItem('activeGame', false);
  HtmlHelper.changeInnerText(data.name, data.nameLT);
  HtmlHelper.toggleClassList(`${data.name}Container`, 'is-flipped', 'add');
  HtmlHelper.toggleClassList(`${data.name}`, 'is-flipped-child', 'add');
  // document.getElementById(`${data.name}Container`).classList.add('is-flipped');
  // document.getElementById(`${data.name}`).classList.add('is-flipped-child');
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
