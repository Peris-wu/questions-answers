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
    setTimeout(() => {
      if (this.status === Commitment.PENDING) {
        this.status = Commitment.FULFILLED
        this.result = value
        this.fulfillCallBack.forEach((cb) => {
          const res = cb(this.result)
          if (res) {
            this.result = res
          }
        })
      }
    }, 100)
  }
  reject = (reason) => {
    if (this.status === Commitment.PENDING) {
      this.status = Commitment.REJECTED
      this.result = reason
      this.rejectCallBack.forEach((cb) => {
        cb(this.result)
      })
    }
  }
  then(onFulFulled, onRejected) {
    return new Commitment(() => {
      setTimeout(() => {
        onFulFulled = typeof onFulFulled === 'function' ? onFulFulled : () => {}
        onRejected = typeof onRejected === 'function' ? onRejected : () => {}
        if (this.status === Commitment.PENDING) {
          this.fulfillCallBack.push(onFulFulled)
          this.rejectCallBack.push(onRejected)
        }
        if (this.status === Commitment.FULFILLED) {
          onFulFulled(this.result)
        }
        if (this.status === Commitment.REJECTED) {
          onRejected(this.result)
        }
      })
    })
  }
}
let p = new Commitment((resolve, reject) => {
  console.log(1)
  resolve(66)
})
p.then((value) => {
  console.log(value)
  return value + 1
}).then((value) => {
  console.log(123)
  console.log(value)
})
console.log(2)
