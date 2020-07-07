/*
 * @Descripttion: 
 * @version: 
 * @Author: chendenghui
 * @Date: 2020-03-17 19:49:09
 * @LastEditors: chendenghui
 * @LastEditTime: 2020-03-22 14:36:25
 */
//数字转中文
function toChineseNum(num) {
    num += ''
    let numLength = num.length
    let numStr = '零一二三四五六七八九十'
    let unitArr = ['', '十', '百', '千', '万']
    function getResult(str) {
        let res = '';
        if (str.length > 5) {
            let first = str.slice(-5);
            let second = str.slice(0, str.length - 5);
            for (let i in second) {
                res = res + numStr[second[i]] + unitArr[second.length - i];
            }
            for (let i in first) {
                res = res + numStr[first[i]] + unitArr[first.length - i - 1];
            }
        } else {
            let first = str.slice(-5);
            console.log('first', first);
            for (let i in first) {
                res = res + numStr[first[i]] + unitArr[first.length - i - 1];
            }
        }
        res = res.replace(/零[零十百千]+/g, '零').replace(/零+$/g, '').replace(/零万/g, '万')
            return res;
        }
        
        if (numLength > 8) {
            return getResult(num.slice(0, numLength - 8)) + '亿' + getResult(num.slice(-8))
        } 
        return getResult(num)
    }
    
    console.log(toChineseNum(1000005600454456))
    console.log(toChineseNum(12334))
    let e = 1334234;
    console.log((2345678).length)