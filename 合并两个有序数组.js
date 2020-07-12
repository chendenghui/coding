// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。

// 说明:

// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
// 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
//  

// 示例:

// 输入:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// 输出: [1,2,2,3,5,6]



/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    var left1 = 0;
    var left2 = 0;
    var newNum1= nums1.slice(0,m);
    var newNum2 = nums2.slice(0,n)
    var result = [];
    while (left1 < m && left2 < n) {
        if (newNum1[left1] < newNum2[left2]) {
            result.push(newNum1[left1]);
            left1 = left1 +1;
        }else {
            result.push(newNum2[left2])
            left2  = left2 +1;
        }
    }
    result = result.concat(newNum1.slice(left1)).concat(newNum2.slice(left2));
    console.log('result:',nums1,result)
    for (var i=0; i < result.length;i ++) {
        nums1[i] = result[i];
    }
};