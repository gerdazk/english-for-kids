const Words = require('./Words');

function setSwitch(value) {
  return localStorage.setItem('switch', value);
}

function getSwitch() {
  return localStorage.getItem('switch');
}

function changeStatistics(name, key) {
  const storedData = JSON.parse(localStorage.getItem(name));
  if (key === 'clicked' || key === 'correct' || key === 'wrong') {
    storedData[key] += 1;
  } else return;
  localStorage.setItem(name, JSON.stringify(storedData));
}

function createStatistics() {
  const stat = {
    clicked: 0,
    state: false,
    correct: 0,
    wrong: 0,
  };

  Words.getAllCardNames().forEach((item) => {
    localStorage.setItem(item, JSON.stringify(stat));
  });
}

const getStatistics = (storedData) => JSON.parse(localStorage.getItem(storedData));

const changeCurrentPage = (item) => {
  localStorage.setItem('currentPage', item);
};

const changeRandomCard = (item) => {
  localStorage.setItem('randomCard', item);
};

const setTotalErrors = () => {
  const errors = localStorage.getItem('totalErrrors');
  if (errors) {
    localStorage.setItem('totalErrors', errors + 1);
  } else {
    localStorage.setItem('totalErrors', 1);
  }
};

module.exports = {
  setSwitch,
  getSwitch,
  changeStatistics,
  createStatistics,
  getStatistics,
  changeCurrentPage,
  changeRandomCard,
  setTotalErrors,
};
