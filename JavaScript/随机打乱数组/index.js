function randomArr(arr) {
  let res = JSON.parse(JSON.stringify(arr))
  res.sort(() => {
    return Math.random() - 0.5
  })
  return res
}
let arr = [1, 2, 3, 4, 5]
