function append(parent, child) {
  return parent.appendChild(child);
}

const getElement = (id) => document.getElementById(id);

const setElementData = (element, data) => element.setAttribute('data', JSON.stringify(data));

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
    setElementData(element, data);
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
  getElement(id).innerHTML = text;
}

function clearHtml(id) {
  getElement(id).innerHTML = '';
}

const toggleVisibility = (id, value) => {
  const element = getElement(id);
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
    getElement(id).classList.add(className);
  } else {
    getElement(id).classList.remove(className);
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
  getElement,
  setElementData,
};
