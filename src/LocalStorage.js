function set(key, value) {
  console.log('localst', localStorage.getItem(key));
  return localStorage.setItem(key, value);
}

function get(key) {
  return localStorage.getItem(key);
}

module.exports = { set, get };
