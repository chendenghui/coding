var fundDisappearedNumbers = function(nums) {
  for(let i = 0;i<nums.length;i++) {
    let index = Math.abs(nums[i])-1
    if(num[index]>0) {
      nums[index] = -nums[index]
    }
  }
  let res = []

  for(let i = 0;i<nums.length;i++) {
    if(nums[i]>0) {
      res.push(i+1) 
    }
  }
  console.log(res)
  return  res
}

var findDisappearedNumbers = function (nums) {
  for(let i=0;i<nums.length;i++) {
    let index = Math.abs(nums[i]) - i
    if(nums[index]>0) {
      nums[index] = -nums[index]
    }
  }
  let res = []
  for(let i=0;i<nums.length;i++) {
    if(nums[i]>0) {
      res.push(i+1)
    }
  }
}

function debounce (fn, deley = 500) {
  let timer = 0;
  return function() {
    if(timer) clearTimeout(timer)
    timer = setTimeout(()=> {
      fn.apply(this,arguments)
      timer = 0
    },deley)
  }

}

function throttle(fn, deley = 300) {
  let timer = 0
  return function() {
    if(timer) return
    timer = setTimeout(()=> {
      fn.apply(this,arguments)
      timer = 0
    },deley)
  }
}