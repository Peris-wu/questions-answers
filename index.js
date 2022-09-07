//字符串
/* 
  substring slice split indexOf padStart padEnd startsWith endsWith concat
  includes repeat replace
*/

/* 
  数组
  push unshift pop shift join reduce map forEach filter flat splice concat 
  slice some every includes indexOf find findIndex sort from of
*/

/* 
  Math
  abs 
  random 
  min 
  max 
  floor
  ceil
  round
  sign 
  trunc 
*/

/* 
    Object
    hasOwnProperty
    getOwnPropertyNames
    keys
    values
    entries
    is
    assign
*/

/* 
  setTimeout模拟setInterval
*/

class Commitment {
  static Pedding = 'Pedding'
  static Fulfill = 'Fulfill'
  static Reject = 'Reject'
  constructor(exector) {
    try {
      this.result
      this.status = Commitment.Pedding
      this.callback = []
      exector(this.resolve, this.reject)
    } catch (e) {
      console.log(e)
    }
  }
  resolve = (value) => {
    if (this.status === Commitment.Pedding) {
      this.status = Commitment.Fulfill
      this.result = value
      this.callback.length > 0
        ? this.callback.forEach((cb) => {
            setTimeout(() => {
              cb.resolve(this.result)
            })
          })
        : ''
    }
  }
  reject = (reason) => {
    if (this.status === Commitment.Pedding) {
      this.status = Commitment.Reject
      this.result = reason
      this.callback.length > 0
        ? this.callback.forEach((cb) => {
            cb.reject(this.result)
          })
        : ''
    }
  }
  then = (onFulfill, onReject) => {
    return new Commitment((resolve, reject) => {
      if (this.status === Commitment.Pedding) {
        this.callback.push({
          resolve: (value) => {
            try {
              const result = onFulfill(value)
              resolve(result)
            } catch (e) {
              console.log(e)
              reject(e)
            }
          },
          reject: (reason) => {
            try {
              const result = onReject(reason)
              resolve(result)
            } catch (e) {
              console.log(e)
              reject(e)
            }
          }
        })
      }
      if (this.status === Commitment.Fulfill) {
        setTimeout(() => {
          try {
            onFulfill(this.result)
          } catch (e) {
            console.log(e)
          }
        })
      }
      if (this.status === Commitment.Reject) {
        setTimeout(() => {
          try {
            onReject(this.result)
          } catch (e) {
            console.log(e)
          }
        })
      }
    })
  }
}

// let p = new Commitment((resolve, reject) => {
//   setTimeout(() => {
//     console.log(1)
//     resolve('success')
//   }, 2000)
// })
// console.log(2)
// p.then((value) => {
//   console.log(value)
// })

let obj = {
  name: 'jack'
}

function fn() {
  console.log(this)
}
let res = fn.call(obj)
console.log(res)
