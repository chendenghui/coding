// console.log(1)
// setTimeout(() => {
//     console.log(2)
// })
// process.nextTick(() => {
//     console.log(3)
// })
// setImmediate(() => {
//     console.log(4)
// })
// new Promise((resolve) => {
//     console.log(5)
//     resolve()
//     console.log(6)
// }).then(() => {
//     console.log(7)
// })
// Promise.resolve().then(() => {
//     console.log(8)
//     process.nextTick(() => {
//         console.log(9)
//     })
// })

// console.log(foo());
// function foo(){
//     return bar();
//     var bar = function(){return 5}
//     var bar = ()=> 6
//     var bar = (function(){return 7})()

//     function bar(){ return 8}
// }

// var a = 5;
// function todo(){
//     var a = 9
//     return function(){
//         a = 7
//     }
// }
// todo()();
// console.log(a)

// new Promise(function(resole, reject) {
//     resole(2);
//     console.log(0)
// }).then(console.log)
// console.log(3)

// console.log(Object.toString.call([1,2,3]))