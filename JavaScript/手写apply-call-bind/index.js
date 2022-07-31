// 内置apply
// window.name = 'windowName'

// fn('jack', 11)
const fn = function (name, age) {
  console.log(`this->${this}`) // window
  console.log(this.name, name, age) // windowName jack 11
}

let obj = {
  name: 'peris',
  age: 18
}
// fn.apply(obj, ['jess', 18])

// myApply

let newObj = {
  name: 'peter',
  age: 18
}
Function.prototype.myApply = function (pointObj, args) {
  // 判断传入需要改变的对象，不存在则指向window
  pointObj = pointObj || window
  // 根据谁调用this指向谁的原则，给传入的对象添加一个属性,它的值就是需要改变this只想的函数
  pointObj.fn = this
  pointObj.fn(...args)
  delete pointObj.fn
}
fn.myApply(newObj, ['jess01', 20])
