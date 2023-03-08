// 1、找基准（一般是以中间项为基准）
// 2、遍历数组，小于基准的放在left，大于基准的放在right
// 3、递归

// function quickSort(arr) {
//     if(arr.length <=1 ) return arr;
//     const num = arr[0];
//     let left=[],right = [];
//     // let i要从1开始
//     for(let i= 1;i<arr.length;i++) {
//         if(arr[i]<=num){
//             left.push(arr[i])
//         }else {
//             right.push(arr[i])
//         }
//     }
//     return quickSort(left).concat([num],quickSort(right))
// }


// const arr1 = quickSort([76,12,4,87,726,36,108,222,3])
// console.log(arr1)

//line=readline()
//print(line)
let arr = [1,657,27,36,34,41,5,62]
function quickSort(arr) {
    console.log(28,arr)
    if(arr.length <=1) return arr
    let a = arr[0];
    let left = [];
    let right = [];
    let res = []
    for(let i=1;i<arr.length;i++) {
        if(arr[i]<a) {
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }
    
    return  quickSort(left).concat([a],quickSort(right))
    
}
console.log(quickSort(arr))