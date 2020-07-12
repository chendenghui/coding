


//解法 1：暴力法:   遍历数组中的所有元素，找到是否存在。时间复杂度是 O(N^2)，空间复杂度是 O(1)
// ac地址：https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/submissions/
// 原文地址：https://xxoo521.com/2019-12-19-er-wei-shu-zu-cha-zhao/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    const rowNum = matrix.length;
    if (!rowNum) {
        return false;
    }
    const colNum = matrix[0].length;
    for (let i = 0; i < rowNum; i++) {
        for (let j = 0; j < colNum; j++) {
            if (matrix[i][j] === target) return true;
        }
    }

    return false;
};




// 解法 2:观察数组规律: 按照题目要求，数组的特点是：每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序,,时间复杂度是 O(M+N)，空间复杂度是 O(1)。其中 M 和 N 分别代表行数和列数。
// ac地址：https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/
// 原文地址：https://xxoo521.com/2019-12-19-er-wei-shu-zu-cha-zhao/
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    const rowNum = matrix.length;
    if (!rowNum) {
        return false;
    }
    const colNum = matrix[0].length;
    if (!colNum) {
        return false;
    }

    let row = 0,
        col = colNum - 1;
    while (row < rowNum && col >= 0) {
        if (matrix[row][col] === target) {
            return true;
        } else if (matrix[row][col] > target) {
            --col;
        } else {
            ++row;
        }
    }

    return false;
};



//解法 3: 解题思路  从矩阵左下方第一个元素判断，如果此行第一个元素大于目标元素（这一行后面的肯定都大于目标元素），进入下次循环，循环内部用includes查找是否含有目标元素，找到后，手动结束外层循环（无需执行多余的循环内容了

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function(matrix, target) {
    let flag = false
    for (let i = matrix.length; i > 0; i--) {
        if (matrix[i-1][0] <= target) {
            if (matrix[i-1].includes(target)) {
                flag = true
                i = -1
            }
        }
    }
    return flag
};
