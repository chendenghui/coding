
//1,4,7,5,2,6,3
// console.log(1)
// setTimeout(()=> {
//     console.log(2)
//     setTimeout(()=> {
//         console.log(3)
//     })
// })
// new Promise(resolve=> {
//     console.log(4)
//     resolve(5)
// }).then(res=> {
//     console.log(res)
// })
// setTimeout(function() {
//   console.log(6)  
// })
// console.log(7)

//1,5,6,3,7,8,9,2,4
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

// function divide(numerator, denominator) {
  
//     return new Promise((resolve, reject) =>
//     {
//      if (typeof numerator !== 'number' || typeof denominator !== 'number' ) {
//             reject(new Error('Must be number!'));
//           }          
//      console.log('After validating type...');
//      if (denominator === 0) {
//             reject(new Error("Cannot divide by0!"));
//           }
//          console.log('After validating non-zerodenominator...');
//           resolve(numerator / denominator);
//        });
//       }
      
//     divide(3, 0)
//         .then(res => console.log('success'))
//     .catch(err => console.log(`Failed${err}`))
//     .then(r => console.log(r))


// Array.prototype.method=function(){
//   　　console.log(this.length);
//   }
//   var myArray=[1,2,4,5,6,7,3]
//   myArray.name="数组"
//   for (var index in myArray) {
//     console.log(myArray[index]);
//   }
// Array.prototype.method=function(){
//   　　console.log(this.length);
//   }
//   var myArray=[1,2,4,5,6,7]
//   myArray.name="数组";
//   for (var value of myArray) {
//     console.log(value);
//   }

// var val=1;
// var obj={
//     val:2,
//     del:function(){
//         console.log(this);                    
//         this.val*=2;
//         console.log(val);
//     }
// }

// obj.del();

// // var this = 
// var a = new Object();

// function get(obj,attr,num){
//     var result = obj;
//     attr = attr.split('');
//     for(var i=0;i<attr.length;i++){
//         result = result[attr[i]];
//         if(!result){
//             return num
//         }
//     }
//     return result;
// }
// var obj = {
//     a:{
//         b:{
//             c:[1,2,3]
//         }
//     }
// }
// console.log(get(obj,'a.b.c[0]',0))


let p1 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(1)
    },1000)
  })
  
  let p2 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(3)
    },2000)
  })
  let p3 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(4)
    },3000)
  })
  let p4 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(2)
    },4000)
  })
  
  let p5 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve(7)
    },5000)
  })
  
  
//   Promise.all([p1, p2,p3,p4,p5]).then((result) => {
//     console.log(result)               //['成功了', 'success']
//   }).catch((error) => {
//     console.log(error)
//   })
  

function fun (arr) {
    return new Promise((resolve,reject)=>{
    let time = new Date().getTime()
    const res = new Array(arr.length)
    let finishCount = 0
    for(let i =0;i<arr.length;i++) {
        arr[i].then((r)=> {
            res[i] = new Date().getTime()-time
            ++finishCount

            if(arr.length == finishCount) {
                resolve(res)
            }

        })
    }
})
}
fun([p1, p2,p3,p4,p5]).then((res)=> {
    
    console.log(res)
})