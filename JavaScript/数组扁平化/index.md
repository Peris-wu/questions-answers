# 数组扁平化

```
// case 1
function myFlat(arr = []) {
  const result = []
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...myFlat(item))
    } else {
      result.push(item)
    }
  })
  return result
}
let arr = [[1, 2, 3], 4, [[5, 6, 7], 8]]
console.log(myFlat(arr))

```

```
// case 2

function reduceFlat(arr = []){
  return arr.reduce((res,item)=>{
    return res.concat(Array.isArray(item)?reduceFlat(item):item)
  },[])
}
let arr = [[1, 2, 3], 4, [[5, 6, 7], 8]]
console.log(myFlat(arr))
```
