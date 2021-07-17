const Category = require('./Category');
const Switch = require('./Switch');
const data = require('./data');

window.addEventListener('DOMContentLoaded', () => {
  Switch.create();
  const keys = Object.keys(data.cards);
  for (let i = 0; i < keys.length; i += 1) {
    Category.create(8, document.getElementById('cards'), data.cards[keys[i]]);
  }
});
