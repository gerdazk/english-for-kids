const htmlHelper = require('./HtmlHelper');
const SoundPlayer = require('./SoundPlayer');

const handleClick = (e) => {
  const data = JSON.parse(e.target.getAttribute('data'));
  SoundPlayer.play(data.name);
  htmlHelper.changeInnerText(e.target.id, data.nameLT);
};

const handleMouseLeave = (e) => {
  const data = JSON.parse(e.target.getAttribute('data'));
  if (e.target.innerHTML === data.nameLT) {
    htmlHelper.changeInnerText(e.target.id, data.name);
  }
};

const create = (parentElement, categoryData) => {
  htmlHelper.append(
    parentElement,
    htmlHelper.create({
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
