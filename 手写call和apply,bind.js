/**
 * call，apply，bind都可以绑定this，区别在于：apply和call是绑定this后直接调用该函数，而bind会返回一个新的函数，并不直接调用，可以由程序员决定调用的时机。
 * https://juejin.cn/post/7128233572380442660
 * 
 * 根据call的特点，就是改变this指向，并且让当前函数执行。
  根据传入的上下文(如果传入的是基本数据类型,并且是真值,就用对象包装一下，否则，传入的就是默认执行window)，让其拥有属性，让这个属性去执行。 ctx ? Object(ctx) : window
  改变this指向： 将当前的this赋值给传入的上下文  context.fn = this;
  让当前函数执行(需要判断是否传参) args.length ? context.fn(...args) : context.fn()
  将当前函数执行的结果返回 return res
  删除我们构造的假执行的函数： delete context.fn

 * 
 */
Function.prototype.myCall = function (target, ...args) {
  console.log(5,arguments,arguments[0])
  const symbolKey = Symbol();
  const context = target ||  window; //在浏览器中window不会报错
  context[symbolKey] = this //我们为这个属性，赋了一个值this，而这个this就正是借过来使用的函数，这样我们执行该函数时，其中的this，自然而然的就指向了target
  const res = context[symbolKey](...args) // args本身是rest参数，搭配的变量是一个数组，数组解构后就可以一个个传入函数中
  delete context[symbolKey]
  return res

}
var a = function() {}
a.myCall()

Function.prototype.myApply =  function(target, args) {
  const symbolKey = Symbol();
  const context = target || window;
  context[symbolKey] = this
  const res = target[symbolKey](...args)
  delete context[symbolKey]
  return res
}

Function.prototype.myBind = function(target, ..outArgs) {
  const symbolKey = Symbol();
  const context = target || window;
  context[symbolKey] = this
  return function(...innerArgs) {
    const res = context[symbolKey](...outArgs, ...innerArgs)
    delete context[symbolKey]
    return res
  }
}