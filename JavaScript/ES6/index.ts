// 字符串函数 slice substring repeat startsWith endsWith padStart padEnd
// inclues split chatAt concat indexOf replace match
// let str = 'abcd1tyui2i1'
// let res = str.substring(0, 2)
// console.log(res)
// console.log(str)

// let res = str.substring(0, 1)
// console.log(res)

// 数组函数  push pop unshift shift
// indexOf findIndex find sort reduce splice slice
// join concat map forEach filter flat fill from some every includes
// Array.prototype.push()

// let arr = [
//   {
//     id: 1
//   },
//   {
//     id: 3
//   },
//   {
//     id: 6
//   },
//   {
//     id: 9
//   }
// ]
// let arr = [1, 3, 6, 9, 2, 4]
// let res = arr.filter((item) => {
//   return item > 5
// })
// console.log(arr)
// console.log(res)
// let res = arr.findIndex((item, index) => {
//   console.log(item, index)
//   return item === 1
// })
// console.log(res)
// let arr = Array.of(5)
// console.dir(arr)
// let object = {
//   name: 'peris',
//   age: 18
// }
// console.log(Object.entries(object))

// interface Animal {
//   name: string
//   type: string
//   action(): void
// }

abstract class Animal {
  protected name: string
  protected type: string
  constructor(name: string, type: string) {
    this.name = name
    this.type = type
  }
  fn() {
    console.log(this.name)
  }
  abstract action(): void
}

class Dog extends Animal {
  constructor(name: string, type: string) {
    super(name, type)
  }
  action(): void {
    console.log('狗叫')
  }
  fn(): void {
    console.log(this.name)
  }
}

let dog = new Dog('旺财', '哺乳动物')
console.log(dog.name)
