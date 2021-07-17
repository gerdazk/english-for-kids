const Category = require('./Category');
const Switch = require('./Switch');

window.addEventListener('DOMContentLoaded', () => {
  Switch.create();
  Category.create(8, document.getElementById('cards'));
});
