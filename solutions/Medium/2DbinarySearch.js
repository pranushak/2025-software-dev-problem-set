/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++) {
        for(let c = 0; c < matrix[i].length; c++) {
            if(matrix[i][c] === target) {
                return true;
            }
        }
    }
    return false;
};