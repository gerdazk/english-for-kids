const htmlHelper = require('./HtmlHelper');
const SoundPlayer = require('./SoundPlayer');

const create = (parentElement) => {
  const element = htmlHelper.create({ name: 'div', text: 'labas' });
  htmlHelper.append(parentElement, element);
  element.addEventListener('click', () => {
    SoundPlayer.play('angry');
  });
  return parentElement;
};

module.exports = { create };
