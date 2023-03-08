/*
 * @Descripttion: 通过proxy实现数据响应式
 * @version: 
 * @Author: chendenghui
 * @Date: 2020-03-17 23:15:06
 * @LastEditors: chendenghui
 * @LastEditTime: 2020-03-18 01:55:22
 */
// 核心原理是利用Object.defineProperty()进行数据的劫持，再结合订阅发布模型实现，具体是：
//       利用Object.defineProperty()做数据劫持，结合订阅发布模式;
// 内部解耦为三部分，再结合指令解析器

// 1. 监听器Observer: 递归的监听对象上的所有属性，当属性改变时触发对应的watcher
// 2. 订阅者watcher: 当监听的数据值修改时，执行相应的回调函数，更新模板内容
// 3. 订阅者watcher集合的数组Dep：链接observer和watcher，每一个observer对应一个dep,内部维护一个数组，保存与该observer相关的watcher
// 4. 实现一个指令解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。

// Object.defineProperty改写get和set时候，get里添加的watcher，set里边调用notify，那个set的地方，实例化Dep的时候，通过触发get方法巧妙地添加了侦听器
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
    let p = new Proxy(target, handler);
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