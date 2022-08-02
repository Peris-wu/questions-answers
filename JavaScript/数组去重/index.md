# 数组去重

```
// 普通方式数组去重
function fn(arr) {
  const handleArr = []
  arr.forEach((item) => {
    if (handleArr.indexOf(item) === -1) {
      handleArr.push(item)
    }
  })
  return handleArr
}

// new Set()方式去重
function fn(arr) {
  return [...new Set(arr)]
}

// 通过filter方式去重
function fn(arr) {
  return arr.filter((elm, index) => {
    // 如果indexOf查找到的索引与当前循环索引一致，说明当前元素是第一次出现
    // 否则当前元素则不是第一次出现，即重复
    return arr.indexOf(elm) === index
  })
}

let arr = ['a', 'b', 'c', 1, 2, 3, 1, 2, 3, 'a']
console.log(fn(arr))
```