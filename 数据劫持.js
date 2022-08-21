/*
 * @Descripttion: 通过proxy实现数据响应式
 * @version: 
 * @Author: chendenghui
 * @Date: 2020-03-17 23:15:06
 * @LastEditors: chendenghui
 * @LastEditTime: 2020-03-18 01:55:22
 */

let watcher = (target, setBind, getLogger) =>{
    let handler = {
        get(target, property, receiver){
            getLogger(target, property);
            return Reflect.get(target, property, receiver);
        },
        set(target, property, value, receiver) {
            setBind(target,property,value)
            return Reflect.set(target, property, value)
        }
    };
    let p = new Proxy({}, handler);
    return p;
}

let obj = {a:1};
let proxyObj = watcher(
    obj,
    (t, p, v) => {
        console.log(`属性${p},被修改为${v}`)
    },
    (t, p) => {
        console.log(`属性${p}发生了改变${t[p]}`)
    }
)
proxyObj.a = 3;
proxyObj.a;

var a = 2;
function fun(){
    console.log('a',a) //undefined
    if(false){
        var a = 3;//变量提升带来的，尽管存在块级作用域，但是var声明的变量会跨越这个域。
    }
}
fun();


const lx = {
    num:1,
    pv: (a)=>{
        console.log('pv', a)
    }
}
// lx每次执行pv方法的时候，打印日志
// console.log('be called', a);

function observe(obj) {
    const _this= this;
    if (!obj || typeof obj !== 'object') {
        return;
    }
    Object.defineProperty(obj, 'pv', {
        get: function() {
            return function(arguments) {
                console.log('be called', arguments)
                console.log('pv',arguments);
            };
        },
        set: function(newVue) {
            console.log('newVue', newVue)
        }
    })
}
observe(lx);
lx.pv(33);