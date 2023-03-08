// function foo(...arg) {
//   if(!Array.isArray(foo.arr)) {
//   foo.arr =[]
//   }
//   console.log(foo)
//   foo.arr.push(...arg)
// }

// Function.prototype.sum= function() {
//   return foo.arr.reduce((pre,cur)=>{
//       return pre+cur
//   },0)
// }
// var f1 = foo(1,2,3)
// // f1.sum()
// console.log(f1)



function add() {
  let args = Array.from(arguments)
  // console.log(22,a,_args, arguments)
  let adder = function () {
    args.push(...arguments)
    return adder
  }
  adder.toString = function () {
    return args.reduce(function (a, b) {
      return a + b
    })
  }
  return adder
}
console.log(add(1, 2, 3)(3).toString())
console.log((add(1)(2)(3)))
console.log(add(1)(2)(3)(4)(5))


var a = [1,2]
a.push(3,3,4,5,6,7);
console.log(41, a)



function myNew(func,...args) {
  var obj=Object.create(func.prototype)
  func.call(obj,...args)
  return obj;
}


class LimitPromise{
  constructor(max) {
    this._max = max
    this._count = 0
    this._taskQueue = []
  }

  call(caller, ...args) {
    return new Promise((resolve,reject) => {
      const task = this._createTask(caller,args,resolve,reject)
      if(this._count>=this._max) {
        this._taskQueue.push(task) 
      }else {
        task()
      }
    })
  }

  _createTask(caller,args,resolve,reject) {
    return ()=> {
      caller(...args).then(resolve).catch(reject).finally(()=> {
        this._count--
        if(this._taskQueue.length) {
          let task = this._taskQueue.shift()
          task()
        }else {

        }

      })
      this._count++
    }  
  }
}

class EventBus {
  constructor() {
    this._events = {}

  }
  on(eventName, cb) {
    if(!this._events.hasOwnProperty(eventName)) {
      this._events.eventName =[]
    }
    this._events[eventName].push(cb)
  }
  emit(eventName,...args) {
    const callback = this._events.eventName ||[]
    callback.forEach(cb=>cb(...args))
  }

  off(eventName,cb) {
    if(this._events.hasOwnProperty(eventName)) {
      const callbacks= this._events.eventName ||[]
      this._events[eventName] = callbacks.filters(item =>item !== cb)
    }
  }

  once(eventName,cb) {
    const newCb = (...args) => {
      cb(...args) 
      this.off(eventName,cb)
    }
    this.on(eventName, newCb)
  }
}

function EventBusClass () {
  this.msgQueues = {}
}

EventBusClass.prototype={
  on:function(msgName,func) {
    if(!this.msgQueues.hasOwnProperty(msgName)) {
      this.msgQueues[msgName] = []
    }
    this.msgQueues[msgName].push(func)
  }

  emit:function(msgName,...args) {
    if(!this.msgQueues.hasOwnProperty(msgName)) {
      return
    }
    const msgQueues = this.msgQueues[msgName] = this.msgQueues ||[]
    msgName.forEach(cb => cb(...args))
  } 

  off: function(msgName, func) {
    if(!this.msgQueues.hasOwnProperty(msgName)){
      return
    }
    this.msgQueues[msgName] = (this.msgQueues[msgName]||[]).filters(i=>i!== func)
  }

  once: function(msgName, func) {
    let once = (...args) => {
      func(...args)
      this.off(msgName,func)
    }
    this.on(msgName, func)
  }
}