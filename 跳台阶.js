/*
 * @Descripttion: 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
 * @version: 
 * @Author: chendenghui
 * @Date: 2020-03-20 17:02:05
 * @LastEditors: chendenghui
 * @LastEditTime: 2020-03-22 13:59:41
 */

 
// 变态的跳台阶问题处理起来确实是有些棘手，一次可以跳上的阶数是不定的。
// 先看n=0时，跳法f(0)=0；
// n=1，只能是从第0个台阶跳过来，跳法f(1)=1;
// n=2，可能是第0个台阶跳了2阶或者从第1个台阶跳了1阶，跳法f(2)=f(0)+f(1);
// n=3，可能是第0个台阶跳了3阶、第1个台阶跳了2阶、第2个台阶跳了1阶，跳法f(3)=f(0)+f(1)+f(2);
// ...
// n=n-1，跳法f(n-1)=f(0)+f(1)+f(2)+...+f(n-2);
// n=n，跳法f(n)=f(0)+f(1)+f(2)+...+f(n-1);
// 由上面两个等式得：f(n) = f(n-1)+f(n-1) = 2f(n-1)

// 跳台阶，一次跳N种，递归
function jumpFloor(number)
{
    if(number < 1)
        return 0;
    if(number === 1)
        return  1;
    return 2*jumpFloor(number-1)
}
// 尾递归
function jump (n,cur = 1) {
    if(n<1) return 0;
    if(n===1) return cur;
    return jump(n-1,cur*2);
}
//迭代
function nextTwo (n) {
    let cur = 1;
    let next = 2;
    let sum = 0;
    for (let i = 1; i< n;i++) {
        sum = next*2;
        cur = next;
        next = sum;
    }
    return cur;
}


console.log(jumpFloor(7));
console.log(jump(7));
console.log(nextTwo(7));