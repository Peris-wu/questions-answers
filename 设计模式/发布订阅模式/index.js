class Bus {
  constructor() {
    this.sub = {}
  }
  $on(key, callback) {
    try {
      if (Object.prototype.toString.call(key) !== '[object String]') return
      this.sub[key]
        ? this.sub[key].push(callback)
        : (this.sub[key] = [callback])
    } catch (err) {
      console.log(err)
    }
  }
  $emit(key, ...rest) {
    try {
      if (Object.prototype.toString.call(key) !== '[object String]') return
      if (this.sub[key]) {
        this.sub[key].forEach((callback) => {
          callback(...rest)
        })
      }
    } catch (err) {
      console.log(err)
    }
  }
}
module.exports = new Bus()
