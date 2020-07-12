class PubSub{
    constructor(){
        this.handleBars= {}; // 保存监听事件
    }
    // 订阅
    subscribe(eventName,handle){
        try {
            if (!this.handleBars.hasOwnProperty(eventName)){
                this.handleBars[eventName] = [];
            } 
            if (typeof handle == 'function') {
                this.handleBars[eventName].push(handle);
            } else {
                throw new Error(`你需要给${eventName}事件添加回调方法`);
            }
        } catch (error) {
            console.warn(error);
        }
    }
    // 发布
    publish(eventName,...arg){
        try {
            if (this.handleBars.hasOwnProperty(eventName)) {
                this.handleBars[eventName].map(item=>{
                    item.apply(null,arg)
                })
            } else {
                throw new Error(`${eventName}事件未被注册`);
            }
        } catch (error) {
            console.warn(error);
        }
    }
    // 移除订阅
    unSubscribe(eventName,handle){
        try {
            if (this.handleBars.hasOwnProperty(eventName)){
                this.handleBars[eventName].map((item,index)=>{
                    if (item === handle) {
                        console.log(item);
                        this.handleBars[eventName].splice(index,1)
                    }
                })
            }
        } catch (error) {
            console.warn(error);
        }
    }
}
// 实例化
const sub = new PubSub();

// 订阅的回调方法
function func1(type){
    console.log('===type=1==',type);
}
function func2(type){
    console.log('===type=2==',type);
}
function func3(type,data){
    console.log('===type===',type,'===data===',data);
}
// 订阅事件
sub.subscribe('ready',func1)
sub.subscribe('ready',func2)
sub.subscribe('complate',func3)

setTimeout(()=>{
    // 触发订阅事件
    sub.publish('ready','ready') 
    sub.publish('complate','complate','哈哈哈')
    console.log(sub.handleBars);

    // 移除订阅的ready事件func1回调
    sub.unSubscribe('ready',func1);
    console.log(sub.handleBars);

},1000)




// 构造EventBus


function EventBusClass() {
    this.msgQueues = {}
}

EventBusClass.prototype = {
    // 将消息保存到当前的消息队列中
    on: function(msgName, func) {
        if (this.msgQueues.hasOwnProperty(msgName)) {
            this.msgQueues[msgName] = this.msgQueues[msgName].push(func)               
        } else {
            this.msgQueues[msgName] = [func];
        }
    },
    // 消息队列中仅保存一个消息
    one: function(msgName, func) {
        // 无需检查msgName是否存在
        this.msgQueues[msgName] = func;
    },
    // 发送消息
    emit: function(msgName, msg) {
        if (!this.msgQueues.hasOwnProperty(msgName)) {
            return
        }
        this.msgQueues[msgName].map((fn) => {
            fn(msg)
        })
        let leng = this.msgQueues[msgName].length;
        for (let i = 0; i < leng; i++) {
            try {
                cbs[i].apply(null,msg)
            } catch (e) {
                new Error(e, `event Err for "${event}"`)
            }
        }
   
        
    },
    // 移除消息
    off: function(msgName) {
        if (!this.msgQueues.hasOwnProperty(msgName)) {
            return
        }
        delete this.msgQueues[msgName]
    }
}

// 将EventBus放到window对象中
const EventBus = new EventBusClass()
window.EventBus = EventBus

//发布订阅
// class PubSub {
//     constructor () {
//         this.handleBars = {};
//     }
//     //订阅者
//     subscribe (type,fn) {
//         try {
//             if (!this.handleBars.hasOwnProperty(type)) {
//                 this.handleBars[type] = [];
//             }else if(typeof fn === 'function') {
//                 this.handleBars[type].push(fn)
//             }else {
//                 throw new Error(`请给${type},添加争取的回调函数数！`)
//             }
//         }catch(e){
//             console.warn(e)
//         }
        
//     }
//     //发布者 
//     publish(type,...args) {
//         try {

//             if(!this.handleBars.hasOwnProperty(type)) {
//                 throw new Error(`请先订阅${type}事件！`)
//             }else {
//                 this.handleBars[type].map(item => {
//                     item.apply(null, args);
//                 })
//             }
//         } catch(e) {
//             console.warn(e)
//         }
//     }
//     //取消发布
//     unSubscribe (type,fn) {
//         try {
//             if (!this.handleBars.hasOwnProperty(type)) {
//                 throw new Error(`请先订阅${type}事件`)
//             }else if(typeof fn === 'function') {
//                 // this.handleBars[type] =  this.handleBars[type].filter(item => item !==fn);
//                 this.handleBars[type].map((item,index) => {
//                     if(fn = item) {
//                         this.handleBars[type].splice(index,1)
//                     }
//                 })
//                 console.log(this.handleBars)
//             }else {
//                 throw new Error(`请输入正确的${type}事件`)
//             }
//         } catch (error) {
//             console.warn(error)
//         }
//     } 
// }
// const sub = new PubSub()
// function func1() {
//     console.log(1111);
// }
// function func2() {
//     console.log(2222)
// }
// function func3() {
//     console.log(3333)
// }
// function func4() {
//     console.log(444)
// }

// sub.subscribe('type1',func1)
// sub.subscribe('type1',func2)
// sub.subscribe('type2',func1)
// // sub.subscribe('type2',func2)
// sub.subscribe('type2',func3)
// sub.subscribe('type2',func4)

// setTimeout(() => {
    
//     sub.publish('type1')
//     // sub.unSubscribe("type1",func2)
//     sub.unSubscribe("type2",func3)
// }, 1000);