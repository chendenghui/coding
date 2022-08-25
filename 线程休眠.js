// 前端实现线程休眠
function sleep(second) {
  return new Promise((resolve,reject) => {
    setTimeout(()=>{
      // console.log('xiumian')
      resolve(1)
      // reject(new Error('错误'))
    },second)
  })
}
//串行执行的线程休眠
// async function test () {
//   console.log('start')
//   await sleep(1000)
//   await sleep(1000)
//   await sleep(2000)
//   await sleep(1000)
//   console.log('end')
// }
// test()

// 并发执行的线程休眠
async function bx() {
  let tasks= [];
  for (let i=0; i<3;i++) {
    tasks.push(sleep(1000))
  }
  // await Promise.all(tasks)
  const res = await Promise.allSettled(tasks)
  console.log(29,res)
}
bx()