function add() {
  let _args = Array.prototype.slice.call(arguments);
  let _adder = function () {
    _args.push(...arguments)
    return _adder
  }
  _adder.toString = function () {
    return _args.reduce(function (a, b) {
      return a + b
    })
  }
  return _adder
}
console.log(add(1, 2, 3)(3).toString())
console.log(add(1)(2)(3))
add(1)(2)(3)(4)(5)

function curry(func, args) {
  var len = func.length;
  var args = args || [];

  return function () {
    var _args = [].slice.call(arguments);
    [].push.apply(_args, args);
    // 如果参数个数小于最初的func.length，则递归调用，继续收集参数
    if (_args.length < len) {
      return curry.call(this, func, _args);
    }
    // 参数收集完毕，则执行func
    return func.apply(this, _args);
  }
}

function add(a, b) {
  return a + b;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2));