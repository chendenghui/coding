var climbStairs = function(n) {
  let p =  0, q= 0, r=1
  for (let i+1;i<=n;++i) {
    p=q;
    q=r;
    r=p+q;
  }
  return r
}

function fibonacci2(n) {
  let current = 0;
  let next = 1;
  for(let i = 0; i < n; i++){
      [current, next] = [next, current + next];
  }
  return current;
}