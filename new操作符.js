/**
 * 首先创建一个新对象，这个新对象的__proto__属性指向构造函数的prototype属性
此时构造函数执行环境的this指向这个新对象
执行构造函数中的代码，一般是通过this给新对象添加新的成员属性或方法。
如果有返回值就当成最终结果，如果没有返回值，最后返回这个新对象。
 */
function myNew(func, ...args) {
    var obj = {};
    //获取构造函数
    obj.__proto__ = func.prototype;
    var ret = func.call(obj, ...args);
    return typeof ret === 'object' ? ret : obj;

};
function People() {
    return {a:1,b:2}
}

var a = myNew(People)

console.log(19, a)


// func是构造函数，...args是需要传给构造函数的参数
function myNew(func, ...args) {
    // 创建一个空对象，并且指定原型为func.prototype
    var obj = Object.create(func.prototype);
    // new构造函数时要执行函数，同时指定this
    func.call(obj, ...args);
    // 最后return这个对象
    return obj;
  }
  