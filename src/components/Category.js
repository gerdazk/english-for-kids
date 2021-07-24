const Card = require('./Card');
const Words = require('../utils/Words');

function create(parent, categoryName) {
  Words.getCardsByCategory(categoryName).forEach((word) => Card.create(parent, word));
}

module.exports = { create };
