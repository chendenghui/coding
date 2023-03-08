// https://www.bilibili.com/video/BV1L34y1j7Rp/?spm_id_from=333.337.search-card.all.click&vd_source=e5b5e624681e02d3d0c4a79e54663cd0
// 把元素的值当下标，找到对应下标的数，标记成负数，在遍历一遍，如果有没有变成负数的值，逆向思维，那它所对应的下标再加一就是没有出现的数字
var findDisappearedNumbers = function(nums) {
  for(let i=0;i<nums.length;i++) {
      let index = Math.abs(nums[i])-1
      if(nums[index]>0)
      nums[index]= -nums[index]
  }
  let res=[]

  for(let i=0;i<nums.length;i++) {
    // console.log(nums[i])
      if(nums[i]> 0) {
          res.push(i+1)
      }
  }
  console.log(res)
  return res
};


let arr = [4,3,2,7,8,2,3,1]
// 3 2 1 6 7 1 2 0

findDisappearedNumbers(arr)
