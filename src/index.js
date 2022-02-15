
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || matrix.length === 0) return [];
  let newArr = [];
  for (let i = 0; i < matrix.length; i++) {
    const arr = matrix[i];
    newArr = newArr.concat(i % 2 ? [...arr].reverse() : arr);
  }
  return newArr;
}
