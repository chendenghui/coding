/*
 * @Descripttion: 
 * @version: 
 * @Author: chendenghui
 * @Date: 2020-03-18 14:08:46
 * @LastEditors: chendenghui
 * @LastEditTime: 2020-03-22 14:00:55
 */
function debounce (fn, deley=100) {
    let timer = 0;
    return function() {
        if(timer) clearTimeout(timer)
        timer = setTimeout(()=> {
            fn.apply(this, arguments)
            timer = 0
        },deley)
    }
}

// function throttle (handle, deley) {
//     var lastTime = 0;
//     return function() {
//         var nowTime = new Date();
//         if(nowTime -  lastTime >= deley) {
//             handle.appply(this, Array.from(arguments));
//             lastTime = nowTime
//         }
//     }
// }

function throttle(fn, deley = 100) {
    let timer = 0
    return function() {
      if(timer) return
      timer = setTimeout(()=> {
        fn.apply(this, arguments)
        timer = 0
      }, deley)
    }
  }
    // function func() {
    //     console.log(11)
    // }
    // const f = throttle(func, 2000)
    // setInterval(() => {
    //     f()
    // }, 100);

    function test() {
        console.log(123213);
    }
    const f = debounce(test,5000);
    f()