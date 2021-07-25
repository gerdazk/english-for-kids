const Card = require('./Card');
const Words = require('../utils/Words');
const HtmlHelper = require('../utils/HtmlHelper');

function create(categoryName) {
  HtmlHelper.append(document.getElementById('main'), HtmlHelper.create({ name: 'div', id: 'cardsContainer', className: 'cards-container' }));
  Words.getCardsByCategory(categoryName).forEach((word) => Card.create('cardsContainer', word));
}

module.exports = { create };
