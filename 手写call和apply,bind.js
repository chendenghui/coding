/**
 * call，apply，bind都可以绑定this，区别在于：apply和call是绑定this后直接调用该函数，而bind会返回一个新的函数，并不直接调用，可以由程序员决定调用的时机。
 */
Function.prototype.myCall = function () {
  console.log(5,arguments,arguments[0])
}
var a = function() {}
a.myCall()