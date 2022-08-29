/*
 * @Descripttion: 判断 A是否是B的实例，也就是说在A的原型链上是否有隐式原型完全等于B的原型
 * @version: 
 * @Author: chendenghui
 * @Date: 2020-03-18 10:46:02
 * @LastEditors: chendenghui
 * @LastEditTime: 2020-03-22 14:00:10
 */

//手写instanceof
var instance_of = function(left, right) {
// 验证如果为基本数据类型，就直接返回 false
  const baseType = ['string', 'number', 'boolean', 'undefined', 'symbol']
  if(baseType.includes(typeof(left))) { return false }

    var R = right.prototype;
    var L = left.__proto__;
    while(true) {
        if (L === null) return false;
        if (R === L) return true;
        L = L.__proto__;
    }
}
function people () {
    
}
var test = new people();
console.log(instance_of(test, people));