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
// var findDisappearedNumbers = function(nums) {
//   const res = []
//   // 限定[1, n]，原地打标记，出现过就标记为负数
//   for (let i = 0; i < nums.length; i++) {
//       const indexTag = Math.abs(nums[i]) - 1
//       if (nums[indexTag] > 0) {
//           nums[indexTag] = -nums[indexTag]
//       }
//   }
//   for (let i = 0; i < nums.length; i++) {
//       if (nums[i] > 0) {
//           res.push(i + 1)
//       }
//   }
//   console.log(res)

//   return res
// };

let arr = [4,3,2,7,8,2,3,1]
findDisappearedNumbers(arr)
