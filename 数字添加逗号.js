/*
 * @Descripttion: 
 * @version: 
 * @Author: chendenghui
 * @Date: 2020-03-17 22:39:37
 * @LastEditors: chendenghui
 * @LastEditTime: 2020-03-22 14:35:50
 */
// 数字添加逗号
function commafy (num) {
    let numStr = num + '';
    let arr = num < 0 ? numStr.slice(1).split('.') : numStr.split('.');
    let a = arr[0].split(''); // 整数部分切割成数组
    for(let i = a.length - 3; i > 0; i=i-3) {
        a.splice(i, 0, ',')  
    }
    let res = arr[1] ? a.join('') + '.' + arr[1] : a.join('')
    return num < 0 ? '-' + res : res;
}

console.log(commafy(12564654.456456)) // 12,564,654.456456

console.log(commafy(0.122324));
