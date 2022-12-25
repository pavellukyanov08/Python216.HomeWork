  /* classroom.js */

/** @param {number[]} grades */
export function getNumberOfGrades(grades) {
	return grades.length
}

/** @param {number[]} grades */
export function getSumGrades(grades) {
  return grades.reduce((a, b) => a + b)
}

/** @param {number[]} grades */
export function getAverageValue(grades) {
  return grades.reduce((a, b ) => a + b) / grades.length
}

/** @param {number[]} grades */
export function getPassingGrades(grades) {
  return grades.filter((grade => grade >= 10))
}

/** @param {number[]} grades */
export function getFailingGrades(grades) {
  return grades.filter((grade => grade <= 9))
}

/** @param {number[]} grades */
export function getRaisedGrades(grades) {
  const grad = grades.map(function(grade) {
    return grade + 1;
  });
  return grad;
}