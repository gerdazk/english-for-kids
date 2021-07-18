function setSwitch(key, value) {
  return localStorage.setItem(key, value);
}

function getSwitch(key) {
  return localStorage.getItem(key);
}

function changeStatistics(name, key) {
  const data = JSON.parse(localStorage.getItem(name));
  if (key === 'clicked') {
    data.clicked += 1;
  }
  if (key === 'state') {
    if (data.state) {
      data.state = false;
    } else {
      data.state = true;
    }
  }
  localStorage.setItem(name, JSON.stringify(data));
}

function createStatistics(data) {
  const stat = {
    clicked: 0,
    state: false,
    correct: 0,
    false: 0,
  };

  const keys = Object.keys(data);
  for (let i = 0; i < keys.length; i += 1) {
    for (let j = 0; j < keys[i].length; j += 1) {
      localStorage.setItem(data[keys[i]][j].name, JSON.stringify(stat));
    }
  }
}

module.exports = {
  setSwitch, getSwitch, changeStatistics, createStatistics,
};
