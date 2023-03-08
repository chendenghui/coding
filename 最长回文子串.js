/**
 * 找到字符串s的最长回文子串
 */



let childStr= function(s) {
  if(s.lenght<2) {
    return s
  }
  let res = '';
  for(let i=0;i<s.length;i++) {
    // 奇数
    helper(i,i) 
    //偶数
    helper(i, i+1)
  }
  function helper(m,n) {
    while(m>=0 && n< s.length && s[m] == s[n]) {
      m--
      n++
    }
    // m n 循环完了 此刻是不满足条件的，真正去计算时我们应该取上一轮循环的结果 (n-1) - (m+1) = n-m-2, 取个数 要+1
    if((n-m-1)>res.length) {
      res = s.slice(m+1,n)
    } 
     
  }

  return res
  
}

console.log(childStr('aba'))