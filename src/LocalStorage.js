function setSwitch(key, value) {
  return localStorage.setItem(key, value);
}

function getSwitch(key) {
  return localStorage.getItem(key);
}

module.exports = { setSwitch, getSwitch };
