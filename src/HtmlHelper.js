function append(parent, child) {
  return parent.appendChild(child);
}

function create({
  name,
  text,
  id,
  handleClick,
  data,
  handleMouseLeave,
  className,
  attributes,
}) {
  const element = document.createElement(name);

  if (attributes) {
    attributes.forEach((attribute) => element.setAttribute(attribute.name, attribute.value));
  }

  if (data) { // todo, prideti visus data prie attributes
    element.setAttribute('data', JSON.stringify(data));
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

  if (handleMouseLeave) {
    element.addEventListener('mouseleave', handleMouseLeave);
  }

  if (className) {
    element.classList.add(className);
  }

  return element;
}

function changeInnerText(id, text) {
  document.getElementById(id).innerHTML = text;
}

function clearHtml(id) {
  document.getElementById(id).innerHTML = '';
}

module.exports = {
  append,
  create,
  changeInnerText,
  clearHtml,
};
