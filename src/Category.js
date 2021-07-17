const Card = require('./Card');

function create(num, parent) {
  for (let i = 0; i < num; i += 1) {
    Card.create(parent);
  }
  return document.getElementById('cards');
}

module.exports = { create };
