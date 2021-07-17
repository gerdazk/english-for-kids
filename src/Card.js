const htmlHelper = require('./HtmlHelper');
const SoundPlayer = require('./SoundPlayer');

const create = (parentElement) => {
  console.log('darau kazka', parentElement);
  const element = htmlHelper.create('div', 'labas');
  htmlHelper.append(parentElement, element);
  element.addEventListener('click', () => {
    SoundPlayer.play('angry');
  });
  return parentElement;
};

module.exports = { create };
