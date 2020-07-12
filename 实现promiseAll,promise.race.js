let promiseAll = (promises) => {
    return new Promise((resolve, reject) => {
        // 用来存储每个promise的返回值
        let values = new Array(promises.length);
        // 当前已经完成了几个promise
        let finishCount = 0;

        for (let i = 0; i < promises.length; ++i) {
            let promise = promises[i];
            promise.then(val => {
                values[i] = val;
                ++finishCount;
                if (finishCount === promises.length) {
                    resolve(values);
                }
            }).catch(err => {
                reject(err)
            })
        }
    });
};

///////////////////////////
function isPromise(obj) {
    return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';  
}

const myPromiseRace = (arr)=>{
    return new Promise((resolve,reject)=>{
        if(arr.length === 0){
            return 
        }else{
            for(let item of arr){
                if(isPromise(item)){
                    item.then((data)=>{
                        resolve(data);
                    },reject);
                }else{
                    resolve(item);
                }
            }
        }
    })
}

var promise1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 5000, 'one');
});

var promise2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'two');
});
var promise3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'three');
});

myPromiseRace([promise1, promise2, promise3]).then(function(value) {
  console.log(value);// two
});