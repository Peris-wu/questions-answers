let arr = [
  {
    id: 1,
    name: 'peris'
  }
]
let res = arr.map((item) => {
  if (item.id === 1) {
    return {
      ...item,
      name: 'jack'
    }
  } else {
    return item
  }
})
console.log(arr)
console.log(res)
