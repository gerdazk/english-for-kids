const Card = require('./Card');
const Words = require('../utils/Words');
const HtmlHelper = require('../utils/HtmlHelper');
const LocalStorage = require('../utils/LocalStorage');

function create(categoryName) {
  HtmlHelper.append(
    HtmlHelper.getElement('main'),
    HtmlHelper.create({
      name: 'div',
      id: 'cardsContainer',
      className: 'cards-container',
    }),
  );
  if (categoryName === 'repeat') {
    const words = Words.getAllCardNames()
      .map((name) => LocalStorage.getStatistics(name))
      .sort((a, b) => b.wrong - a.wrong)
      .filter((word) => word.wrong)
      .slice(0, 8)
      .map((stat) => Words.getDataByName(stat.name));
    words.forEach((word) => Card.create('cardsContainer', word));
    localStorage.setItem('difficultWords', JSON.stringify(words));
  } else {
    Words.getCardsByCategory(categoryName).forEach((word) => Card.create('cardsContainer', word));
  }
}

module.exports = { create };
