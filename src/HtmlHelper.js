function create({
  name, text, type, id, handleClick, data, handleMouseLeave,
}) {
  const element = document.createElement(name);
  if (type) {
    element.setAttribute('type', type);
  }

  if (text) {
    element.innerHTML = text;
  }

  if (data) {
    if (data.name) {
      element.innerHTML = data.name;
    }
    element.setAttribute('data', JSON.stringify(data));
  }

  if (id) {
    element.id = id;
  }

  if (handleClick) {
    element.addEventListener('click', handleClick);
  }
  if (handleMouseLeave) {
    element.addEventListener('mouseleave', handleMouseLeave);
  }

  return element;
}

function append(parent, child) {
  parent.appendChild(child);
  return parent;
}

function changeInnerText(id, text) {
  document.getElementById(id).innerHTML = text;
}

function clearHtml(id) {
  document.getElementById(id).innerHTML = '';
}

module.exports = {
  append, create, changeInnerText, clearHtml,
};
