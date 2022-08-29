# apply 手写

```
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
  // 根据谁调用this指向谁的原则，给传入的对象添加一个属性,它的值就是需要改变this指向的函数
  pointObj.fn = this
  const result = pointObj.fn(...args)
  delete pointObj.fn
  return result
}
fn.myApply(newObj, ['jess01', 20])

```

# call 手写

```
let newObj = {
  name: 'peter',
  age: 18
}
const fn = function (name, age) {
  console.log(`this->${this}`) // window
  console.log(this.name, name, age) // windowName jack 11
}
Function.prototype.myCall = function (newObject, ...args) {
  //判断传入需要改变的对象，如果是null或者undefined则指向window
  newObject = newObject || window
  // 根据谁调用this指向谁的原则，给传入的对象添加一个属性,它的值就是需要改变this指向的函数
  newObject.fn = this
  const result = newObject.fn(...args)
  delete newObject.fn
  return result
}
fn.myCall(newObj,'jess01', 20)
// output peter jess01 20
```

# 手写 bind(该函数返回一个 this 指向改变后的函数,并且没有执行)

```
Function.prototype.myBind = function (newObject, ...args) {
  // 这里使用箭头函数是让this指向需要更改this指向的函数,当然也可以通过通过call和apply修改指向
  return (..._args) => {
    //判断传入需要改变的对象，如果是null或者undefined则指向window
    newObject = newObject || window
    // 根据谁调用this指向谁的原则，给传入的对象添加一个属性,它的值就是需要改变this指向的函数
    newObject.fn = this
    const result = newObject.fn(...args, ..._args)
    delete newObject.fn
    return result
  }

}
```
