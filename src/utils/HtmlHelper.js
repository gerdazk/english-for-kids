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

  if (data) {
    // todo, prideti visus data prie attributes
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
    if (typeof className !== 'string') {
      className.forEach((item) => {
        element.classList.add(item);
      });
    } else {
      element.classList.add(className);
    }
  }

  return element;
}

function changeInnerText(id, text) {
  document.getElementById(id).innerHTML = text;
}

function clearHtml(id) {
  document.getElementById(id).innerHTML = '';
}

const toggleVisibility = (id, value) => {
  const element = document.getElementById(id);
  if (!element) {
    return;
  }
  if (value) {
    element.classList.remove('hidden');
  } else {
    element.classList.add('hidden');
  }
};

const toggleClassList = (id, className, operation) => {
  if (operation === 'add') {
    document.getElementById(id).classList.add(className);
  } else {
    document.getElementById(id).classList.remove(className);
  }
};

const getElementData = (element) => JSON.parse(element.getAttribute('data'));

module.exports = {
  append,
  create,
  changeInnerText,
  clearHtml,
  toggleVisibility,
  getElementData,
  toggleClassList,
};
