//对象深层冻结
function constantize(obj) {
  if(Object.isFrozen(obj)) {
    return obj
  }
  //冻结对象
  Object.keys(obj).forEach(item=> {
    if(typeof obj[item] ==='object') {
      constantize(obj[item])
    }
  })
  return Object.freeze(obj)
}
const obj = {
  a:2,
  b:function() {
    console.log(3)
  },
  c:{
    d:[1,2]
  }
}
const objFreeze = constantize(obj)
try {
  obj.a = 5
  obj.c = {e:3,d:[33]}
  console.log(obj,obj.a)
} catch(err){
  console.log(err)
}