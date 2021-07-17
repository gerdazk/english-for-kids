const Card = require('./Card');

function create(num, parent, data) {
  const keys = Object.keys(data);
  for (let j = 0; j < keys.length; j += 1) {
    Card.create(parent, data[keys[j]]);
  }
  return document.getElementById('cards');
}

module.exports = { create };
