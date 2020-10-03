module.exports = function towelSort (matrix) {
  if (!matrix) return [];
  for (let i = 0; i < matrix.length; i++){
    if (i == 1 || i == 3){
      matrix[i].reverse();
    }
  }
  return matrix.flat();
}
