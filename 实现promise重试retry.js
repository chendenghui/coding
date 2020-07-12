retry = function(fn, times, delay) {
    var err = null;
    return new Promise(function(resolve, reject) {

    var attempt = function() {
    fn().then(resolve).catch(function(err) {
        console.log(`Attempt #${times} failed`);
        if (0 == times) {
            reject(err);
        } else {
            times--;
            setTimeout(function(){
                attempt()
            }, delay);
        }
    });
    };

    attempt();
});


// function promiseRetry(fn, times){ //times重复次数
//     return function(...args) {
//         return new Promise((resolve, reject) => {
//         let error
//         const retry = (fn, times) =>{
//             if(times) {
//                 const promiseInstance = fn.apply(this, args)
//                 promiseInstance.then(result => resolve(result)).catch(err => {
//                     error = err 
//                     retry(fn, times - 1)
//                 })
//             } else {
//                 reject(error)
//             }
//         }
//         retry(fn, times)
//         })
//     }
// }