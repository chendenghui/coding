
function objectFactory() {

    var obj = {},
    //获取构造函数
    var constructor = [].shift.call(arguments); // 等同于Array.from(arguments).shift() 从参数中取出构造函数

    obj.__proto__ = constructor.prototype;

    var ret = constructor.apply(obj, arguments);

    return typeof ret === 'object' ? ret : obj;

};
