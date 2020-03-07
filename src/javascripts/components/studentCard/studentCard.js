import './studentCard.scss';

const createStudentCard = (student) => {
  let domString = '<li>';
  domString += '<div>';
  domString += `<img src="${student.picture}" alt=""/>`;
  domString += '</div>';
  domString += `<h2>${student.name}</h2>`;
  domString += '</li>';
  return domString;
};

export default { createStudentCard };
