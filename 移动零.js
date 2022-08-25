/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
//  我们创建两个指针i和j，第一次遍历的时候指针j用来记录当前有多少非0元素。即遍历的时候每遇到一个非0元素就将其往数组左边挪，第一次遍历完后，j指针的下标就指向了最后一个非0元素下标。
//  第二次遍历的时候，起始位置就从j开始到结束，将剩下的这段区域内的元素全部置为0。
 

 var moveZeroes = function (nums) {
	let slow = 0,
		fast = 0;
	while (fast < nums.length) {
    if (nums[fast] !== 0) {
      [nums[fast], nums[slow]] = [nums[slow], nums[fast]];
      slow++;
		}
		fast++;
	}
};

var moveZeroes= function(nums) {
  let fast = 0,slow= 0;
  while (fast<nums.length) {
    if(nums[fast] !=0) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  while(slow<nums.length) {
    nums[slow] = 0
    slow++
  }
}
// 作者：okkjoo
// 链接：https://leetcode.cn/problems/move-zeroes/solution/by-okkjoo-9rrw/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。