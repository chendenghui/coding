const list = [1, 2, 3]
const square = num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(num * num)
        }, 1000)
    })
}

//原题的方法，不能实现异步，forEach不支持异步循环，for 和 for of才行
// async function test() {
//   list.forEach(async x=> {
//     const res = await square(x)
//     console.log(res)
//   })
// }

// 采用for循环，
// async function test() {
//     for (let i =1; i<4; i++) {
//         const res = await square(i)
//         console.log(res)
//     }
// }

// async function asyncForEach(array, callback) {
//     for (let index = 0; index < array.length; index++) {
//         await callback(array[index], index, array);
//     }
// }
// function test () {
//     asyncForEach(list, async x => {
//         var res = await square(x);
//         console.log(res);
//     })
// }
// test();


async function asyncForEachNew(arr, callback) {
    for (let i = 0; i < arr.length; i++  ) {
        await callback(arr[i], i, arr); 
    }
};

function test  () {
    asyncForEachNew(list ,async function callback(x) {
        var res = await square(x);
        console.log(res);
    })
}
test();
