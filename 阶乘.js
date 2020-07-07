/*
 * @Descripttion: 
 * @version: 
 * @Author: chendenghui
 * @Date: 2020-03-20 17:31:51
 * @LastEditors: chendenghui
 * @LastEditTime: 2020-03-22 13:26:23
 */

 //阶乘递归
function fac(n) {
    if(n===1) return 1;
    return fac(n-1)*n;
    
}
//尾递归
function fac1(n,sum) {
    if(n===1) return sum;
    return fac(n-1 ,n*sum)
}
    