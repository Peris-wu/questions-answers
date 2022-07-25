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
let arr = [1, 3, 6, 9, 2, 4]
let res = arr.filter((item) => {
  return item > 5
})
console.log(arr)
console.log(res)
// let res = arr.findIndex((item, index) => {
//   console.log(item, index)
//   return item === 1
// })
// console.log(res)
