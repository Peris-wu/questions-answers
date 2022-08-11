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
  then(onFulFulled, onRejected) {
    const promise = new Commitment((resolve, reject) => {
      onFulFulled =
        typeof onFulFulled === 'function' ? onFulFulled : (result) => result
      onRejected =
        typeof onRejected === 'function' ? onRejected : (reason) => reason
      const parse = (promise, r_result, resolve, reject) => {
        if (promise === r_result) {
          console.log(123)
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
      if (this.status === Commitment.PENDING) {
        this.fulfillCallBack.push({
          onFulFulled: () => {
            try {
              parse(promise, onFulFulled(this.result), resolve, reject)
            } catch (e) {
              reject(e)
            }
          }
        })
        this.rejectCallBack.push({
          onRejected: () => {
            try {
              parse(promise, onRejected(this.result), resolve, reject)
            } catch (e) {
              reject(e)
            }
          }
        })
      }
      if (this.status === Commitment.FULFILLED) {
        setTimeout(() => {
          // parse(promise, onFulFulled(this.result), resolve, reject)
          try {
            const r_result = onFulFulled(this.result)
            // r_result === promise 这里的测试用例要分清楚，不然的话测不出，
            /* 
              let p1 = new Commitment((resolve,reject)=>{
                  resolve(1)
              })
              let p2 = p1.then(res=>{
                return p2  这里返回的p2 是第二个promise 实例
              },reason=>{})
              let p2 = p1.then(res=>{
                return p2  这里返回的p2 是第三个promise 实例
              },reason=>{}).then(res=>{},reason=>{

              })
            */
            if (r_result === promise) {
              throw new TypeError('不能返回同一个promise!!!')
            }
            if (r_result instanceof Commitment) {
              r_result.then(resolve, reject)
            } else {
              resolve(r_result)
            }
          } catch (e) {
            console.log(e)
            reject(e)
          }
        })
      }
      if (this.status === Commitment.REJECTED) {
        setTimeout(() => {
          try {
            parse(promise, onRejected(this.result), resolve, reject)
          } catch (e) {
            reject(e)
          }
        })
      }
    })
    return promise
  }
}
let p2 = new Commitment((resolve, reject) => {
  resolve(66)
})
let p = p2.then(
  (res) => {
    //
    return p
  },
  (reason) => {
    //
  }
)
