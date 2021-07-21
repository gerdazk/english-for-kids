const data = require('./Words');

function setSwitch(key, value) {
  return localStorage.setItem(key, value);
}

function getSwitch(key) {
  return localStorage.getItem(key);
}

// todo. vienas state pakeitimui, kitas clicked logikai
function changeStatistics(name, key) {
  const storedData = JSON.parse(localStorage.getItem(name));
  if (key === 'clicked' || key === 'correct' || key === 'wrong') {
    storedData[key] += 1;
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
