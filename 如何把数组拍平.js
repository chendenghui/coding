/*
 * @Descripttion: 
 * @version: 
 * @Author: chendenghui
 * @Date: 2020-03-20 23:09:46
 * @LastEditors: chendenghui
 * @LastEditTime: 2020-03-22 14:32:45
 */
// 面试题3：如何把数组拍平
// 如何用递归思想实现数组的扁平化❓即如何把[1, [2], [3, [4, [5]]]]拍平得到[1,2,3,4,5]
const flatten = (arr) => {
  let result = [];
  arr.forEach((item, i, arr) => {
    // 若为数组,递归调用 faltten,并将结果与result合并
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(arr[i])
    }
  })
  return result;
};
const arr = [1, [2, [3, 4, 5]]];
console.log(flatten(arr)); // [1, 2, 3, 4, 5]

