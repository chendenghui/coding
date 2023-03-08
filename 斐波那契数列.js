/*
 * @Descripttion: 
 * @version: 
 * @Author: chendenghui
 * @Date: 2020-03-17 18:57:30
 * @LastEditors: chendenghui
 * @LastEditTime: 2020-03-22 13:22:24
 */

// 递归
function fibonacci (n) {
    if (n==1 || n==0) {
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2)
}
// 递归的缺点：
// 1.在递归过程中，每创建一个新函数，解释器都会创建一个新的函数栈帧，并且压在当前函数的栈帧上，这就形成了调用栈。因而，当递归层数过大之后，就可能造成调用栈占用内存过大或者溢出
// 2.分析可以发现，递归造成了大量的重复计算。

// 尾调用优化
// 尾调用是指一个函数里的最后一个动作是一个函数调用的情形：即这个调用的返回值直接被当前函数返回的情形

// 什么时候会执行尾调用优化呢？
// 在ES6中，strict模式下，满足以下条件，尾调用优化会开启，此时引擎不会创建一个新的栈帧，而是清除当前栈帧的数据并复用：
// 1、尾调用函数不需要访问当前栈帧中的变量
// 2、尾调用返回后，函数没有语句需要继续执行
// 3、尾调用的结果就是函数的返回值

'use strict'
function fibonacci1(n, current = 0, next = 1) {
    if(n === 1) return next;
    if(n === 0) return 0;
    return fibonacci(n - 1, next, current + next);
}

 //递推法 斐波那契数列实现 复杂度O(n)
function fibonacci2(n) {
    let current = 0;
    let next = 1;
    let sum = 0;
    for(let i = 0; i < n; i++){
        sum = current + next
        current = next
        next = sum
        // [current, next] = [next, current + next];
    }
    return current;
}
// 用while优化循环效率
function fibonacci3(n) {
    let current = 0;
    let next = 1;
    while(n > 0){
        [current, next] = [next, current + next];
        n--;
    }
    return current;
}

//高级函数
function fibonacci4(n){
	let seed = 1;
	return [...new Array(n)].reduce(p => {
		const temp = p + seed; 
		seed = p;
		return temp;
	},0)
}

// Generator是ES2015的新特性，得益于该特性，我们可以使用生成器方法，制作一个斐波那契数列生成器。
function* fibonacci5(){
    let current = 0;
    let next = 1;
    yield current;
    yield next;

    while(true) {
        [current, next] = [next, current + next];
        yield next;
    }
}
const fibo = fibonacci5();
for(let i=0; i< 10;i ++){
    console.log(fibo.next().value);
}

console.time('fibonacci3');
console.log('fibonacci3',fibonacci3(10));
console.timeEnd('fibonacci3');

console.time('fibonacci4');
console.log('fibonacci4',fibonacci4(10));
console.timeEnd('fibonacci4');
