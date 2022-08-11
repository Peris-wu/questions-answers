class Commitment {
  static PENDING = 'PENDING'
  static FULFILLED = 'FULFILLED'
  static REJECTED = 'REJECTED'
  constructor(executor) {
    try {
      this.status = Commitment.PENDING
      this.result = null
      this.fulfillCallBack = []
      this.rejectCallBack = []
      executor(this.resolve, this.reject)
    } catch (e) {
      console.log(e)
    }
  }

  static resolve(value) {
    return new Commitment((resolve, reject) => {
      if (value instanceof Commitment) {
        value.then(resolve, reject)
      } else {
        resolve(value)
      }
      /* let _resolveArray = []
      let _rejectArray = []
      for (let i = 0; i < _promiseArray.length; i++) {
        if (_promiseArray[i] instanceof Commitment) {
          _promiseArray[i].then(
            (res) => {
              //
              _resolveArray.push(res)
            },
            (reason) => {
              //
              _rejectArray.push(reason)
            }
          )
        } else {
          _resolveArray.push(_promiseArray[i])
        }
      }
      setTimeout(() => {
        if (_rejectArray.length > 0) {
          reject(_rejectArray[0])
        } else {
          resolve(_resolveArray)
        }
      }) */
    })
  }
  static reject(reason) {
    return new Commitment((resolve, reject) => {
      if (reason instanceof Commitment) {
        reason.then(resolve, reject)
      } else {
        reject(reason)
      }
    })
  }
  static all(promises) {
    return new Commitment((resolve, reject) => {
      let _resolveArray = []
      let count = 0
      if (!promises.length) {
        resolve([])
      }
      promises.forEach((promise) => {
        Commitment.resolve(promise).then(
          (res) => {
            _resolveArray.push(res)
            count++
            if (promises.length === count) {
              resolve(_resolveArray)
            }
          },
          (reason) => {
            reject(reason)
          }
        )
      })
    })
  }
  static race(promises) {
    return new Commitment((resolve, reject) => {
      promises.forEach((promise) => {
        Commitment.resolve(promise).then(resolve, reject)
      })
    })
  }
  resolve = (value) => {
    if (this.status === Commitment.PENDING) {
      this.status = Commitment.FULFILLED
      this.result = value
      setTimeout(() => {
        this.fulfillCallBack.length > 0
          ? this.fulfillCallBack.forEach((cb) => {
              cb.onFulFulled(this.result)
            })
          : ''
      })
    }
  }
  reject = (reason) => {
    if (this.status === Commitment.PENDING) {
      this.status = Commitment.REJECTED
      this.result = reason
      setTimeout(() => {
        this.rejectCallBack.length > 0
          ? this.rejectCallBack.forEach((cb) => {
              cb.onRejected(this.result)
            })
          : ''
      })
    }
  }
  parse = (promise, r_result, resolve, reject) => {
    if (promise === r_result) {
      throw new TypeError('不能返回同一个promise')
    }
    try {
      if (r_result instanceof Commitment) {
        r_result.then(resolve, reject)
      } else {
        resolve(r_result)
      }
    } catch (e) {
      reject(e)
    }
  }
  then(onFulFulled, onRejected) {
    const promise = new Commitment((resolve, reject) => {
      onFulFulled =
        typeof onFulFulled === 'function' ? onFulFulled : (result) => result
      onRejected =
        typeof onRejected === 'function' ? onRejected : (reason) => reason
      if (this.status === Commitment.PENDING) {
        this.fulfillCallBack.push({
          onFulFulled: () => {
            try {
              this.parse(promise, onFulFulled(this.result), resolve, reject)
            } catch (e) {
              reject(e)
            }
          }
        })
        this.rejectCallBack.push({
          onRejected: () => {
            try {
              this.parse(promise, onRejected(this.result), resolve, reject)
            } catch (e) {
              reject(e)
            }
          }
        })
      }
      if (this.status === Commitment.FULFILLED) {
        setTimeout(() => {
          this.parse(promise, onFulFulled(this.result), resolve, reject)
          // try {
          //   const r_result = onFulFulled(this.result)
          //   // r_result === promise 这里的测试用例要分清楚，不然的话测不出，
          //   /*
          //     let p1 = new Commitment((resolve,reject)=>{
          //         resolve(1)
          //     })
          //     let p2 = p1.then(res=>{
          //       return p2  这里返回的p2 是第二个promise 实例
          //     },reason=>{})
          //     let p2 = p1.then(res=>{
          //       return p2  这里返回的p2 是第三个promise 实例
          //     },reason=>{}).then(res=>{},reason=>{

          //     })
          //   */
          //   if (r_result === promise) {
          //     throw new TypeError('不能返回同一个promise!!!')
          //   }
          //   if (r_result instanceof Commitment) {
          //     r_result.then(resolve, reject)
          //   } else {
          //     resolve(r_result)
          //   }
          // } catch (e) {
          //   console.log(e)
          //   reject(e)
          // }
        })
      }
      if (this.status === Commitment.REJECTED) {
        setTimeout(() => {
          try {
            this.parse(promise, onRejected(this.result), resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }
    })
    return promise
  }
}

// let p1 = Commitment.resolve(1)
// let p2 = Commitment.reject(2)
// let p3 = Commitment.reject(3)
// Commitment.all([p1, p2, p3]).then(
//   (res) => {
//     console.log(res)
//   },
//   (reason) => {
//     console.log(reason)
//   }
// )

let p1 = new Commitment((resolve, reject) => {
  setTimeout(() => {
    reject('1S')
  }, 1000)
})
let p2 = new Commitment((resolve, reject) => {
  setTimeout(() => {
    resolve('2S')
  }, 2000)
})
let p3 = new Commitment((resolve, reject) => {
  setTimeout(() => {
    resolve('3S')
  }, 500)
})
Commitment.race([]).then(
  (res) => {
    console.log('resolve')
    console.log(res)
  },
  (reason) => {
    console.log('reject')
    console.log(reason)
  }
)
/* let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('1S')
  }, 1000)
})
let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('2S')
  }, 2000)
})
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('3S')
  }, 3000)
})
Promise.race([]).then(
  (res) => {
    console.log('resolve')
    console.log(res)
  },
  (reason) => {
    console.log('reject')
    console.log(reason)
  }
) */
// let p1 = Promise.resolve(1)
// let p2 = Promise.resolve(2)
// Promise.all([]).then(
//   (res) => {
//     console.log(res)
//   },
//   (reason) => {
//     console.log(reason)
//   }
// )
// let p1 = new Commitment((resolve, reject) => {
//   reject(1)
// })
// let p2 = new Commitment((resolve, reject) => {
//   resolve(2)
// })
// let p3 = new Commitment((resolve, reject) => {
//   resolve(3)
// })
// Commitment.resolve(['peris', 2, 3]).then(
//   (res) => {
//     console.log(res)
//   },
//   (reason) => {
//     console.log(reason)
//   }
// )
