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
        var _arg = arguments;
        console.log(_this, _arg);
        clearTimeout(timer);
        timer = setTimeout(function() {
            console.log('this:',this,arguments)
            handle.appply(_this, _arg);
        },deley);
    }
}

function throttle (handle, deley) {
    var lastTime = 0;
    return function() {
        var nowTime = new Date();
        if(nowTime -  lastTime >= deley) {
            handle.appply(this, arguments);
            lastTime = nowTime
        }
    }
}

function test() {
    console.log(123213);
} 
debounce(test(),1000);