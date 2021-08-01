const Reset = require('./buttons/Reset');
const Repeat = require('./buttons/Repeat');
const Words = require('../utils/Words');
const LocalStorage = require('../utils/LocalStorage');
const HtmlHelper = require('../utils/HtmlHelper');

const calculateAnswers = (data) => {
  let total;
  let correct;
  let wrong;
  if (data.correct && data.wrong) {
    total = data.correct + data.wrong;
    correct = Math.round((data.correct / total) * 100);
    wrong = Math.round((data.wrong / total) * 100);
  } else if (!data.correct && !data.wrong) {
    correct = 0;
    wrong = 0;
  } else if (data.correct && !data.wrong) {
    correct = 100;
    wrong = 0;
  } else {
    correct = 0;
    wrong = 100;
  }
  return [correct, wrong];
};

const sortWords = () => {
  const sortBy = localStorage.getItem('sort');
  const reverse = localStorage.getItem('reverse');
  let words = Words.getAllCards();
  if (!sortBy) {
    return words;
  }
  if (sortBy === 'name' || sortBy === 'translation' || sortBy === 'category') {
    words = words
      .sort((a, b) => a[sortBy].toLowerCase().localeCompare(b[sortBy].toLowerCase()));
  } else if (sortBy === 'clicked') {
    words = words.sort(
      (a, b) => LocalStorage.getStatistics(a.name)[sortBy]
        - LocalStorage.getStatistics(b.name)[sortBy],
    );
  } else {
    words = words
      .sort((a, b) => {
        const dataA = calculateAnswers(LocalStorage.getStatistics(a.name));
        const dataB = calculateAnswers(LocalStorage.getStatistics(b.name));
        if (sortBy === 'correct') {
          return dataA[0]
            - dataB[0];
        }
        return dataA[1] - dataB[1];
      });
  }
  if (reverse === 'true') {
    return words.reverse();
  }
  return words;
};

const create = (navigateToRepeatWords) => {
  localStorage.setItem('currentPage', 'statistics');
  const container = HtmlHelper.getElement('statisticsContainer');
  const words = sortWords();
  words.forEach((item) => {
    const stat = LocalStorage.getStatistics(item.name);
    const correctAnswers = calculateAnswers(stat)[0];
    const wrongAnswers = calculateAnswers(stat)[1];
    if (stat) {
      const parent = HtmlHelper.create({
        id: `${item.name}row`,
        name: 'div',
        className: 'row',
      });

      const name = HtmlHelper.create({
        text: item.name,
        name: 'div',
        className: 'cell',
      });

      const translation = HtmlHelper.create({
        text: item.translation,
        name: 'div',
        className: 'cell',
      });

      const category = HtmlHelper.create({
        text: item.category,
        name: 'div',
        className: 'cell',
      });

      const clicked = HtmlHelper.create({
        text: JSON.stringify(stat.clicked),
        name: 'div',
        className: 'cell',
      });

      const correct = HtmlHelper.create({
        text: JSON.stringify(correctAnswers),
        name: 'div',
        className: 'cell',
      });

      const wrong = HtmlHelper.create({
        text: JSON.stringify(wrongAnswers),
        name: 'div',
        className: 'cell',
      });

      HtmlHelper.append(container, parent);
      HtmlHelper.append(parent, name);
      HtmlHelper.append(parent, translation);
      HtmlHelper.append(parent, category);
      HtmlHelper.append(parent, clicked);
      HtmlHelper.append(parent, correct);
      HtmlHelper.append(parent, wrong);
    }
  });
  // eslint-disable-next-line no-use-before-define
  Reset.create(onResetClick);
  Repeat.create(navigateToRepeatWords);
  HtmlHelper.toggleVisibility('reset', true);
};

const recreateNames = () => {
  const array = ['name', 'translation', 'category', 'clicked', 'correct', 'wrong'];
  array.forEach((item) => {
    document.getElementById(item).innerHTML = item.toUpperCase();
  });
};

const handleSorting = (e) => {
  const current = localStorage.getItem('sort');
  recreateNames();
  if (current === e.target.id) {
    if (localStorage.getItem('reverse') === 'true') {
      localStorage.setItem('sort', undefined);
      localStorage.setItem('reverse', false);
      e.target.innerHTML = e.target.id.toUpperCase();
    } else {
      localStorage.setItem('reverse', true);
      e.target.innerHTML = `${e.target.id.toUpperCase()}↑`;
    }
  } else {
    localStorage.setItem('reverse', false);
    localStorage.setItem('sort', e.target.id);
    e.target.innerHTML = `${e.target.id.toUpperCase()}↓`;
  }
  sortWords();
  HtmlHelper.clearHtml('statisticsContainer');
  create();
};

const createColumns = (navigateToRepeatWords) => {
  const tableContainer = HtmlHelper.create({
    name: 'div',
    className: 'table-container',
  });

  const tableBody = HtmlHelper.create({
    id: 'statisticsContainer',
    name: 'div',
    className: 'statistics-container',
  });

  const tableHeader = HtmlHelper.create({
    name: 'div',
    className: ['row', 'title-row'],
  });

  const name = HtmlHelper.create({
    text: 'WORD',
    name: 'div',
    id: 'name',
    className: 'cell',
    handleClick: handleSorting,
  });

  const translation = HtmlHelper.create({
    text: 'TRANSLATION',
    name: 'div',
    id: 'translation',
    className: 'cell',
    handleClick: handleSorting,
  });

  const category = HtmlHelper.create({
    text: 'CATEGORY',
    name: 'div',
    id: 'category',
    className: 'cell',
    handleClick: handleSorting,
  });

  const clicked = HtmlHelper.create({
    text: 'CLICKED',
    name: 'div',
    id: 'clicked',
    className: 'cell',
    handleClick: handleSorting,
  });

  const correct = HtmlHelper.create({
    text: 'CORRECT %',
    name: 'div',
    id: 'correct',
    className: 'cell',
    handleClick: handleSorting,
  });

  const wrong = HtmlHelper.create({
    text: 'WRONG %',
    name: 'div',
    id: 'wrong',
    className: 'cell',
    handleClick: handleSorting,
  });

  const main = HtmlHelper.getElement('statistics');
  HtmlHelper.append(main, tableContainer);
  HtmlHelper.append(tableContainer, tableHeader);
  HtmlHelper.append(tableContainer, tableBody);
  HtmlHelper.append(tableHeader, name);
  HtmlHelper.append(tableHeader, translation);
  HtmlHelper.append(tableHeader, category);
  HtmlHelper.append(tableHeader, clicked);
  HtmlHelper.append(tableHeader, correct);
  HtmlHelper.append(tableHeader, wrong);
  create(navigateToRepeatWords);
};

const onResetClick = () => {
  localStorage.setItem('reset', true);
  LocalStorage.createStatistics();
  HtmlHelper.clearHtml('statistics');
  createColumns();
  localStorage.setItem('reset', false);
};

const showResults = () => {
  HtmlHelper.clearHtml('statistics'); const total = localStorage.getItem('totalErrors');

  const successImage = HtmlHelper.create({
    name: 'img',
    attributes: [{ name: 'src', value: '../assets/img/success.png' }],
  });
  const failureImage = HtmlHelper.create({
    name: 'img',
    attributes: [{ name: 'src', value: '../assets/img/failure.png' }],
  });
  const container = HtmlHelper.create({
    name: 'div',
    className: 'total-errors',
    text: `Total errors: ${total}`,
  });
  HtmlHelper.append(HtmlHelper.getElement('main'), container);
  if (total < 1) {
    HtmlHelper.append(container, successImage);
  } else {
    HtmlHelper.append(container, failureImage);
  }
  setTimeout(() => {
    window.location.reload();
  }, 5000);
  HtmlHelper.toggleVisibility('start', false);
  return HtmlHelper.getElement('main');
};

module.exports = { showResults, createColumns };
