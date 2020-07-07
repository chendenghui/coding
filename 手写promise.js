/*
 * @Descripttion: 手写promise  https://juejin.im/post/5e5f52fce51d4526ea7efdec
 * @version: 
 * @Author: chendenghui
 * @Date: 2020-03-22 14:52:01
 * @LastEditors: chendenghui
 * @LastEditTime: 2020-03-22 14:52:28
 */

 // 手写Promise
class Promise {
    constructor(executor) {
        // 初始化state 为等待状态
        this.state = 'pending';
        // 成功的值
        this.value = undefined;
        // 失败的值
        this.reason = undefined;
        // 成功存放的数组
        this.onResolvedCallbacks = [];
        // 失败存放的数组
        this.onRejectedCallbacks = [];
        // 成功
        let resolve = (value) => {
            // state 改变 , resolve 调用的会失败
            if (this.state === 'pending') {
                this.state = 'fulfilled'; // resolve调用后 , state转化为成功态
                this.value = value;// 存储成功的值
                // 一旦resolve执行 ， 调用成功数组的函数
                this.onResolvedCallbacks.forEach(fn => fn());
            }
        }
        // 失败
        let reject = (reason) => {
            // state改变后 , reject调用就会失败
            if (this.state === 'pending') {
                // reject 调用后 , state 转换为失败状态
                this.state = 'rejected';
                this.reason = reason;// 存储失败的原因
                // 一旦reject 执行 , 调用失败数组的函数
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        };
        // 立即执行
        // 如果 executor 执行报错 , 直接执行 reject
        try {
            executor(resolve, reject)
        } catch (err) {
            reject(err)
        }
    }
    then(onFulfilled, onRejected) {
        // onFulfilled 如果不是函数 , 就忽略 onFulfilled , 直接返回 value
        onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value;
        // onRejected 如果不是函数 , 就忽略 onRejected ， 直接扔出错误
        onRejected = typeof onRejected === "function" ? onRejected : err => { throw err };
        // 声明返回的 promise2
        let promise2 = new Promise((resolve, reject) => {
            if (this.state === 'fulfilled') {
                // 异步
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value);
                        // resolvePromise函数 , 处理自己return 的promise和默认的promise2的关系
                        resolvePromise(promise2, x ,resolve,reject);
                    } catch (e) {
                        reject(e);
                    }
                },0)
            };
            if (this.state === 'rejected') {
                //异步
                setTimeout(() => {
                    // 如果报错
                    try {
                        let x = onRejected(this.reason);
                        resolvePromise(promise2,x,resolve,reject);
                    } catch (e) {
                        reject(e);
                    }
                },0);
            };
            // 当状态state为pending 时
            if (this.state === 'pending') {
                // onFulfilled传入到成功数组
                this.onResolvedCallbacks.push(() => {
                    //异步
                    setTimeout(() => {
                        try {
                            let x = onFulfilled(this.value);
                            resolvePromise(promise2,x , resolve,reject);
                        } catch (e) {
                            reject(e)
                        }
                    },0);
                })
                // onRejected 传入到失败数组
                this.onRejectedCallbacks.push(() => {
                    // 异步
                    setTimeout(() => {
                        try {
                            let x = onRejected(this.reason);
                            resolvePromise(promise2,x,resolve,reject);
                        } catch (e) {
                            reject(e)
                        }
                    })
                })
            }
        });
        // 返回promise , 完成链式
        return promise2;
    }
    catch(fn) {
        return this.then(null,fn);
    }
}


function resolvePromise(promise2, x, resolve, reject) {
    if (x === promise2) {
        return reject(new TypeError("Chaining cycle detected for promise"));
    }
    // 防止多次调用
    let called;
    // x 不是 null 并且 x 是对象或者函数
    if (x != null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            // A+ 规定 , 声明 then = x 的then 方法
            let then = x.then;
            // 如果 then 是函数 , 就默认是 promise了
            if (typeof then === 'function') {
                // 就让 then 执行 第一个参数是 this 后面是成功的回调和 失败的回调
                then.call(x, y => {
                    // 成功和失败只能调用一个
                    if (called) return;
                    called = true;
                    // resolve 的结果依旧是 promise 那就继续解析
                    resolvePromise(promise2, y, resolve, reject);
                }, err => {
                    // 成功和失败只能调用一个
                    if (called) return;
                    called = true;
                    reject(err); // 失败了就失败了
                })
            } else {
                resolve(x); //直接成功即可
            }
        } catch (e) {
            // 也属于失败
            if (called) return;
            called = true;
            // 取then出错了 那就不要再继续执行了
            reject(e);
        }
    } else {
        resolve(x);
    }
}
