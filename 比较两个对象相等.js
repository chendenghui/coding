 
/*
 * @param x {Object} 对象1
 * @param y {Object} 对象2
 * @return  {Boolean} true 为相等，false 为不等
 */
var deepEqual = function (x, y) {
  // 指向同一内存时
  if (x === y) {
    return true;
  }
  else if ((typeof x == "object" && x != null) && (typeof y == "object" && y != null)) {
    if (Object.keys(x).length != Object.keys(y).length)
      return false;
    for (var prop in x) {
      if (y.hasOwnProperty(prop)){  
        if (! deepEqual(x[prop], y[prop]))
          return false;
      }
      else
        return false;
    }
    return true;
  }
  else 
    return false;
}

// 虽然这个简单的实现适用于我们的例子中，有很多情况下，它是不能处理。例如：

// 如果该属性值之一本身就是一个对象吗？
// 如果属性值中的一个是NaN（在JavaScript中，是不是等于自己唯一的价值？
// 如果一个属性的值为undefined，而另一个对象没有这个属性（因而计算结果为不确定？）

// https://www.cnblogs.com/cuew1987/p/4057726.html

function isObjectValueEqual(a, b) {
  // Of course, we can do it use for in 
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length != bProps.length) {
      return false;
  }

  for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];

      // If values of same property are not equal,
      // objects are not equivalent
      if (a[propName] !== b[propName]) {
          return false;
      }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
}

var obj1 = {
  name: "Benjamin",
  sex : "male"
};

var obj2 = {
  name: "Benjamin",
  sex : "male"
};

//Outputs: true
console.log(isObjectValueEqual(obj1, obj2));