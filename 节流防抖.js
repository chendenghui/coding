/*
 * @Descripttion: 
 * @version: 
 * @Author: chendenghui
 * @Date: 2020-03-18 14:08:46
 * @LastEditors: chendenghui
 * @LastEditTime: 2020-03-22 14:00:55
 */
function debounce (handle, deley) {
    var timer = null;
    return function() {
        var _this = this;
        var _arg = Array.from(arguments);
        console.log(_this, _arg);
        clearTimeout(timer);
        timer = setTimeout(function() {
            handle.appply(_this, _arg);
        },deley);
    }
}

function throttle (handle, deley) {
    var lastTime = 0;
    return function() {
        var nowTime = new Date();
        if(nowTime -  lastTime >= deley) {
            handle.appply(this, Array.from(arguments));
            lastTime = nowTime
        }
    }
}

function test() {
    console.log(123213);
} 
debounce(test(),1000);