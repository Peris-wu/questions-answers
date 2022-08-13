# setTimeout 模拟 setInterval
作用setInterval存在缺陷(每隔时间段内向任务队列推一个回调函数，如果执行栈内的代码运行需要足够的时间，则后续的回调函数则一直在等待执行栈内的代码执行完毕才能调用，这就导致了设置的时间段无意义)

```
function mockSetInterval(callback, timer) {
  let fn = () => {
    callback()
    setTimeout(fn, timer)
  }
  setTimeout(fn, timer)
}
function like() {
  console.log('I like')
}
mockSetInterval(like, 1000)

```