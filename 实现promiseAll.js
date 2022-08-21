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
