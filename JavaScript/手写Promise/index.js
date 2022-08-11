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
    return new Commitment((resolve, reject) => {
      onFulFulled =
        typeof onFulFulled === 'function' ? onFulFulled : () => this.result
      onRejected =
        typeof onRejected === 'function' ? onRejected : () => this.result
      if (this.status === Commitment.PENDING) {
        this.fulfillCallBack.push({
          onFulFulled: () => {
            try {
              const r_result = onFulFulled(this.result)
              if (r_result instanceof Commitment) {
                r_result.then(
                  (res) => {
                    resolve(res)
                  },
                  (reason) => {
                    resolve(reason)
                  }
                )
              } else {
                resolve(r_result)
              }
            } catch (e) {
              reject(e)
            }
          }
        })
        this.rejectCallBack.push({
          onRejected: () => {
            try {
              const r_result = onRejected(this.result)
              if (r_result instanceof Commitment) {
                r_result.then(
                  (res) => {
                    resolve(res)
                  },
                  (reason) => {
                    resolve(reason)
                  }
                )
              } else {
                resolve(r_result)
              }
            } catch (e) {
              reject(e)
            }
          }
        })
      }
      if (this.status === Commitment.FULFILLED) {
        setTimeout(() => {
          try {
            const r_result = onFulFulled(this.result)
            if (r_result instanceof Commitment) {
              r_result.then(
                (res) => {
                  resolve(res)
                },
                (reason) => {
                  resolve(reason)
                }
              )
            } else {
              resolve(r_result)
            }
          } catch (e) {
            reject(e)
          }
        })
      }
      if (this.status === Commitment.REJECTED) {
        setTimeout(() => {
          try {
            const r_result = onRejected(this.result)
            if (r_result instanceof Commitment) {
              r_result.then(
                (res) => {
                  resolve(res)
                },
                (reason) => {
                  resolve(reason)
                }
              )
            } else {
              resolve(r_result)
            }
          } catch (e) {
            reject(e)
          }
        })
      }
    })
  }
}
let p = new Commitment((resolve, reject) => {
  reject(66)
})
  .then(
    (res) => {
      console.log(res)
      return new Commitment((resolve01, reject01) => {
        resolve01(res + 1)
      })
    },
    (reason) => {
      return new Commitment((resolve01, reject01) => {
        resolve01(reason + 1)
      })
    }
  )
  .then(
    (value) => {
      console.log(value)
      return value + 1
    },
    (reason) => {
      console.log(reason)
      return reason + 3
    }
  )

console.log(2)
