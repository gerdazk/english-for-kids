const HtmlHelper = require('./HtmlHelper');
const LocalStorage = require('./LocalStorage');

function create() {
  localStorage.setItem('switch', 'train');
  const text = LocalStorage.get('switch');
  const button = HtmlHelper.create('button', text, 'checkbox');
  HtmlHelper.append(document.body, button);
  button.addEventListener('click', () => {
    if (LocalStorage.get('switch') === 'train') {
      localStorage.setItem('switch', 'play');
      //   LocalStorage.set('switch', 'play');
      window.location.reload();
      console.log('setinu');
    } else {
      LocalStorage.set('switch', 'train');
      window.location.reload();
      console.log('setinu');
    }
  });
  return button;
}

module.exports = { create };
