// You should implement your task here.

module.exports = function towelSort(matrix) {
    return matrix
        ? matrix
              .map((arr, ind) => (ind % 2 !== 0 ? arr.reverse() : arr))
              .flat(1)
        : [];
};
