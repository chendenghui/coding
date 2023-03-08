/*
 * @Descripttion: 
 * @version: 
 * @Author: chendenghui
 * @Date: 2020-03-20 23:09:46
 * @LastEditors: chendenghui
 * @LastEditTime: 2020-03-22 14:32:45
 */
// 文章   https://juejin.cn/post/7080431070310563876
// 面试题3：如何把数组拍平
// 如何用递归思想实现数组的扁平化❓即如何把[1, [2], [3, [4, [5]]]]拍平得到[1,2,3,4,5]
var flatten = (arr) => {
  var result = [];
  arr.forEach((item, i, arr) => {
    // 若为数组,递归调用 faltten,并将结果与result合并
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(arr[i])
    }
  })
  return result;
};
var arr = [1, [2, [3, 4, 5]]];
console.log(flatten(arr)); // [1, 2, 3, 4, 5]

////////////////////////////////////////////////////////////////////////////////////
// 使用reduce
function flat(arr) {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flat(cur) : cur);
  }, []);
};


// 实现在原型链上重写 flat 函数
Array.prototype.fakeFlat = function(num = 1) {
  if (!Number(num) || Number(num) < 0) {
    return this;
  }
  var arr = this.concat();    // 获得调用 fakeFlat 函数的数组
  while (num > 0) {           
    if (arr.some(x => Array.isArray(x))) {
      arr = [].concat.apply([], arr);	// 数组中还有数组元素的话并且 num > 0，继续展开一层数组 
    } else {
      break; // 数组中没有数组元素并且不管 num 是否依旧大于 0，停止循环。
    }
    num--;
  }
  return arr;
};
var arr = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3, [1, 2, 3]]], 5, "string", { name: "弹铁蛋同学" }]
arr.fakeFlat(Infinity)
// [1, 2, 3, 4, 1, 2, 3, 1, 2, 3, 1, 2, 3, 5, "string", { name: "弹铁蛋同学" }];


// 考虑数组空位的情况
// reduce + 递归
Array.prototype.fakeFlat = function(num = 1) {
  if (!Number(num) || Number(num) < 0) {
    return this;
  }
  var arr = [].concat(this);
  return num > 0
    ? arr.reduce(
        (pre, cur) =>
          pre.concat(Array.isArray(cur) ? cur.fakeFlat(--num) : cur),
        []
      )
    : arr.slice();
};
var arr = [1, [3, 4], , ,];
arr.fakeFlat()
// [1, 3, 4]

// foEach + 递归
Array.prototype.fakeFlat = function(num = 1) {
  if (!Number(num) || Number(num) < 0) {
    return this;
  }
  var arr = [];
  this.forEach(item => {
    if (Array.isArray(item)) {
      arr = arr.concat(item.fakeFlat(--num));
    } else {
      arr.push(item);
    }
  });
  return arr;
};
var arr = [1, [3, 4], , ,];
arr.fakeFlat()
// [1, 3, 4]

//////////////////////////////////////////////////////////////////////////////////// 
//复杂对象扁平化
var input = {
  a: 1,
  b: [1, 2, { c: true }, [3]],
  d: { e: 2, f: 3 },
  g: null,
};

function flat(obj = {}, preKey = "", res = {}) {
  //空值判断，如果obj是空，直接返回
  if(!obj) return
  //获取obj对象的所有[key,value]数组并且遍历，forEach的箭头函数中用了解构
  Object.entries(obj).forEach(([key,value])=>{
    if(Array.isArray(value)){
      //如果obj是数组，那么key就是数组的index，value就是对应的value
      //obj是数组的话就用[]引起来
      //因为value是数组，数组后面是直接跟元素的，不需要.号
      let temp = Array.isArray(obj) ? `${preKey}[${key}]` : `${preKey}${key}`
      flat(value,temp,res)
    }else if(typeof value === 'object'){
      //因为value是对象类型，所以在末尾需要加.号
      let temp = Array.isArray(obj) ? `${preKey}[${key}].` : `${preKey}${key}.`
      flat(value,temp,res)
    }else{
      let temp = Array.isArray(obj) ? `${preKey}[${key}]` : `${preKey}${key}`
      res[temp] = value
    }
  })
  return res;
}

console.log(128,flat(input));