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


    var lengthOfLongestSubstring = function(s) {
        let arr = [], max = 0
        for(let i = 0; i < s.length; i++) {
            let index = arr.indexOf(s[i])
            if(index !== -1) {
                arr.splice(0, index+1);
            }
            arr.push(s.charAt(i)) // charAt 返回指定下标的字符串
            max = Math.max(arr.length, max) 
        }
        return max
    };
    
    // 作者：user7746o
    // 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/zi-jie-leetcode3wu-zhong-fu-zi-fu-de-zui-chang-zi-/
    // 来源：力扣（LeetCode）
    // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

    var lengthOfLongestSubstring = function(s) {
        let index = 0, max = 0
        for(let i = 0, j = 0; j < s.length; j++) {
            index = s.substring(i, j).indexOf(s[j])  // substring() 方法用于提取字符串中介于两个指定下标之间的字符。
            if(index !== -1) { 
                i = i + index + 1 
            } 
            max = Math.max(max, j - i + 1) 
        }
        return max
    };
    
    // 作者：user7746o
    // 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/zi-jie-leetcode3wu-zhong-fu-zi-fu-de-zui-chang-zi-/
    // 来源：力扣（LeetCode）
    // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

    var lengthOfLongestSubstring = function(s) {
        let map = new Map(), max = 0
        for(let i = 0, j = 0; j < s.length; j++) {
            if(map.has(s[j])) {
                i = Math.max(map.get(s[j]) + 1, i)
            }
            max = Math.max(max, j - i + 1)
            map.set(s[j], j)
        }
        return max
    };
//     解题思路：

// 使用 map 来存储当前已经遍历过的字符，key 为字符，value 为下标

// 使用 i 来标记无重复子串开始下标，j 为当前遍历字符下标

// 遍历字符串，判断当前字符是否已经在 map 中存在，存在则更新无重复子串开始下标 i 为相同字符的下一位置，此时从 i 到 j 为最新的无重复子串，更新 max ，将当前字符与下标放入 map 中

// 最后，返回 max 即可
// 时间复杂度：O(n)

// 空间复杂度：O(n)
    
    // 作者：user7746o
    // 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/solution/zi-jie-leetcode3wu-zhong-fu-zi-fu-de-zui-chang-zi-/
    // 来源：力扣（LeetCode）
    // 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。