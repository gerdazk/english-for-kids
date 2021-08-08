const BaseButton = require('./BaseButton');

const create = (handleClick) => {
  BaseButton.create('reset', 'reset', handleClick);
};

module.exports = { create };
