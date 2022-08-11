// let p1 = Promise.resolve(1)
// let p2 = Promise.resolve(2)
// let p3 = Promise.reject(3)
// let p4 = Promise.reject(4)
// let arr = [p1, p2, p3, p4]
// Promise.all(arr).then(
//   (res) => {
//     console.log('resolve')
//     console.log(res)
//   },
//   (reason) => {
//     console.log('reject')
//     console.log(reason)
//   }
// )

// function all(arr) {
//   let t_i = 0
//   let t_res = []
//   let rej
//   for (let i = 0; i < arr.length; i++) {
//     arr[i].then(
//       (res) => {
//         t_i++
//         t_res.push(res)
//       },
//       (reason) => {
//         rej = reason
//       }
//     )
//     if (rej) break
//   }
//   if (rej) return reject(rej)
//   resolve(t_res)
// }
let p1 = Promise.reject('reject')

Promise.resolve(p1).then(
  (res) => {
    console.log(1)
    console.log(res)
  },
  (reason) => {
    console.log(2)
    console.log(reason)
  }
)
