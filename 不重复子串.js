/*
 * @Descripttion: 
 * @version: 
 * @Author: chendenghui
 * @Date: 2020-03-23 19:05:55
 * @LastEditors: chendenghui
 * @LastEditTime: 2020-03-23 19:47:58
 */
//不重复子串
var lengthOfLongestSubstring = function(s) {
    let len = 0 //这个是长度
    let longestSubstring = '' //这个最长子串
    let curSub = ''
        for (let i = 0; i < s.length; i++) {
            if (!curSub.includes(s[i])) {
                curSub += s[i]
                if (curSub.length > len) {
                    longestSubstring = curSub
                    len = curSub.length
                }
            } else {
                curSub += s[i]
                let index = curSub.indexOf(s[i])
                curSub = curSub.slice(index + 1)
            }
        }
        return len
    }
