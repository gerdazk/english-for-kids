const HtmlHelper = require('./HtmlHelper');
const SoundPlayer = require('./SoundPlayer');
const LocalStorage = require('./LocalStorage');

const handleClick = (e) => {
  const data = JSON.parse(e.target.getAttribute('data'));
  SoundPlayer.play(data.name);
  HtmlHelper.changeInnerText(e.target.id, data.nameLT);
  LocalStorage.changeStatistics(data.name, 'clicked');
};

const handleMouseLeave = (e) => {
  const data = JSON.parse(e.target.getAttribute('data'));
  if (e.target.innerHTML === data.nameLT) {
    HtmlHelper.changeInnerText(e.target.id, data.name);
  }
};

const create = (parentElement, categoryData) => {
  HtmlHelper.append(
    parentElement,
    HtmlHelper.create({
      name: 'div',
      handleClick,
      id: categoryData.name,
      data: categoryData,
      handleMouseLeave,
    }),
  );
  return parentElement;
};

module.exports = { create };
