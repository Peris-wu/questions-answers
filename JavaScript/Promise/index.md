# Promise (解决异步回调地狱的问题)

Promise必然处于以下3种状态之一

pending(待定)
fulfilled(成功)
rejected(失败)

# then()
then(resolve,reject)
.then(resolve,reject)
resolve -> 成功回调 如果该回调没有返回值的话，下一个then将接受不到参数
reject -> 失败回调 一般来说都不会使用这个失败回调，使用.catch来捕获错误更常见

# all()
Promise.all([p1,p2,...])只有所有的Promise实例为成功时，才会执行Promise.all()的成功回调,只要有一个Promise实例为失败，都会执行Promise.all()的失败回调

当且仅当传入的可迭代对象为空时为同步 Promise.all([])

```
var p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'one')
})
var p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, 'two')
})
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'three')
})
var p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, 'four')
})
var p5 = new Promise((resolve, reject) => {
  reject('reject')
})

Promise.all([p1, p2, p3, p4, p5]).then(
  (values) => {
    console.log(values)
  },
  (reason) => {
    console.log(reason)
  }
)
```

# race() 
race 有竞速的意思，意味着传入的Promise实例哪个的更快的解决或者拒绝就会执行race()对应的成功或者失败回调

```
const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one')
})

const p2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'two')
})

Promise.race([p1, p2])
  .then((value) => {
    console.log(value)
  })
  .catch((err) => {
    console.log(err)
  })

```

