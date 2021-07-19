const data = require('./data');

function setSwitch(key, value) {
  return localStorage.setItem(key, value);
}

function getSwitch(key) {
  return localStorage.getItem(key);
}

function changeStatistics(name, key) {
  const storedData = JSON.parse(localStorage.getItem(name));
  if (key === 'clicked') {
    storedData.clicked += 1;
  }
  if (key === 'state') {
    if (storedData.state) {
      storedData.state = false;
    } else {
      storedData.state = true;
    }
  }
  localStorage.setItem(name, JSON.stringify(storedData));
}

function createStatistics() {
  const stat = {
    clicked: 0,
    state: false,
    correct: 0,
    wrong: 0,
  };

  data.getAllCardNames().forEach((item) => {
    localStorage.setItem(item, JSON.stringify(stat));
  });
}

const getStatistics = (storedData) => JSON.parse(localStorage.getItem(storedData));

const changeCurrentPage = (item) => {
  localStorage.setItem('currentPage', item);
};
module.exports = {
  setSwitch, getSwitch, changeStatistics, createStatistics, getStatistics, changeCurrentPage,
};
