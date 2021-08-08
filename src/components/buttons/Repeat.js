const BaseButton = require('./BaseButton');

const create = (handleClick) => {
  BaseButton.create('repeat', 'Repeat difficult words', handleClick);
};

module.exports = { create };
