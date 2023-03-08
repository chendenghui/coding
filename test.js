class EventEmit {
    constructor() {
        this.events={}
    }
    on(name, fn) {
        if(this.events[name]) {
            this.events[name].push(fn)
        }
        this.events[name]=[fn]
    }   
    off(name,fn) {
        this.events[name] = []
    }
    emit(name,...arg) {
        const eventList = this.events[name];
        if(eventList) {
            for(event of eventList) {
                event(...arg)
            }
        }
    }
    once(name,fn) {
        const once= (...args)=> {
            fn(...args)
            this.off(name,once)
        }
        this.on(name,once)
    }

}

const isValid=(s)=>{
    while(true) {
        let len = s.length
        console.log(35,s)
        s = s.replace('{}','').replace('[]','').replace('()','')
        if(s.length === len) {
            return len
        }
        
    }
}

// function() {
//     while
// }

isValid('[{({()})}]')


function debounce(fn,time=100) {
    let timer=null
    return function(){
        if(timer) clearTimeout(timer)

        timer = setTimeout(()=>{
            fn.apply(this,arguments)
            timer = null
        },time)
    }
}

function throttle(fn, time=100) {
    let timer = null
    return function() {
        if(time) return 
        timer = setTimeout(()=>{
            fn.apply(this,arguments)
            timer = null
        },time)
    }
}

function myNew(fn, ...args) {
    var obj = {}
    obj.__proto__ = fn.prototype;
    var res = fn.call(obj, ...args)
    return typeof res === 'object' ? res : obj
}

// Object.defineProperty()
// Object.defineProperty()