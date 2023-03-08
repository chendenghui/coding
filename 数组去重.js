// const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];
// set
const unique1 = Array.from(new Set(arr))

//include
const unique4 = arr => {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
}

//filter
const unique5 = arr => {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index;
  });
}
//Map

const unique6 = arr => {
  const map = new Map();
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true)
      res.push(arr[i]);
    }
  }
  return res;
}