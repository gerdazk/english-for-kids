function append(parent, child) {
  parent.appendChild(child);
  return parent;
}

function create(elem, text, type) {
  const child = document.createElement(elem);
  child.setAttribute('type', type);
  child.innerHTML = text;
  return child;
}

module.exports = { append, create };
