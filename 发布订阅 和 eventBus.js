class EventBus {
  constructor() {
    this._events = {};
  }
  on(eventName, cb) {
    if (!this._events.hasOwnProperty(eventName)) {
      this._events.eventName = [];
    }
    this._events[eventName].push(cb);
  }

  emit(eventName, ...args) {
    const callbacks = this._events.eventName || [];
    callbacks.forEach((cb) => cb(...args));
  }

  off(eventName, cb) {
    if (this._events.hasOwnProperty(eventName)) {
      const callbacks = this._events.eventName || [];

      this._events[eventName] = callbacks.filters((item) => item !== cb);
    }
  }

  once(eventName, cb) {
    const newCb = (...args) => {
      cb(...args);
      this.off(eventName, cb);
    };
    this.on(eventName, newCb);
  }
}

// 构造EventBus
function EventBusClass() {
  this.msgQueues = {};
}

////////////////////////////////////////////////////////////////////////////////////////////////////////
// 将EventBus放到window对象中
const EventBus = new EventBusClass();
this.EventBus = EventBus;

function EventEmitter() {
  this._event = {};
}
EventEmitter.prototype = {
  on: function (eventNames, cb) {
    if (!this._event) this._event = {};
    if (this._event[eventNames] || (this._event[eventNames] = [])) {
      this._event[eventNames].push(cb);
    }
  },
  emit: function (eventNames, ...args) {
    if (this._event && this._event[eventNames]) {
      this._event[eventNames].forEach((events) => {
        events.call(this, ...args);
      });
    }
  },
  // off的本质是将this._events[eventName]重新赋值，赋值为filter过后的值
  // 直接过滤，找到索引采用splice删除 .filter(cb => cb !== callback);
  // 最后一定要记得es6模块的导入导出
  off: function (eventNames, callback) {
    if (this._event && this._event[eventNames]) {
      this._event[eventNames] = this._event[eventNames].filter((event) => {
        return event !== callback && event.my !== callback;
      });
    }
  },
  // once的本质是先执行on让后触发off
  once: function (eventNames, callback) {
    // 需要等on触发完毕以后再触发off事件
    // this.on(eventNames, callback);
    // this.off(eventNames, callback)
    let once = (...args) => {
      callback(...args);
      // 此处调用的是off函数，传入的实际上是eat,需要删除的是once
      this.off(eventNames, once);
    };
    once.my = callback;
    this.on(eventNames, once); //先绑定一个一次性事件，稍后触发时，再将事件清空
  },
};

module.exports = EventEmitter;
