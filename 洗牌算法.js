/*
 * @Descripttion: 
 * @version: 
 * @Author: chendenghui
 * @Date: 2020-03-22 13:53:00
 * @LastEditors: chendenghui
 * @LastEditTime: 2020-03-22 13:56:13
 */
// 说到抽牌算法。如何每次洗牌更加平均，这是一个比较容易出问题的地方。我们有非常多的算法可以使用，算非常容易想到，使用一个随机数即可。
// 但当你做千次以及上万次测试时会发现，概率并非平均分布，游戏数字出现几率非常高，而一些数字出现几率很低。如何解决这个问题。网上搜了一下，
// 还真有不少方法，一些高级方法基于概率学，但通常情况下速度不理想。最终发现一个名为“Fisher–Yates”的算法，大概介绍如下：
// Fisher–Yates随机置乱算法也被称做高纳德置乱算法，通俗说就是生成一个有限集合的随机排列。Fisher-Yates随机置乱算法是无偏的，所以每个排列都是等可能的，当前使用的Fisher-Yates随机置乱算法是相当有效的，需要的时间正比于要随机置乱的数，不需要额为的存储空间开销。

// 洗牌算法的过程如下：
// 1.需要随机置乱的n个元素的数组a；2.从0到n开始循环，循环变量为i
// 3.生成随机数K，K为0到n之间的随机数；4.交换i位和K位的值
var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function xipai(arr) {
	var k = 0;
	var temp = 0;
	for (var i = 0; i < arr.length; i++) {
		k = Math.floor(Math.random() * (arr.length - i));
		temp = arr[i];
		arr[i] = arr[k];
		arr[k] = temp;
	}
}

console.log(a);
xipai(a);
console.log(a);