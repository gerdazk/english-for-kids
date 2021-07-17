function create({
  name, text, type, id, handleClick,
}) {
  const element = document.createElement(name);
  if (type) {
    element.setAttribute('type', type);
  }

  if (text) {
    element.innerHTML = text;
  }

  if (id) {
    element.id = id;
  }

  if (handleClick) {
    element.addEventListener('click', handleClick);
  }

  return element;
}

function append(parent, child) {
  parent.appendChild(child);
  return parent;
}

module.exports = { append, create };
