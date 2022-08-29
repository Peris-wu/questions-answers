# reduce 实际应用

```
// 记录数组中元素的次数
let arr: number[] = [1, 2, 1, 2, 3, 3, 5, 6, 5]

function calcRepeatNumber(arr: number[]): {} {
  return arr.reduce((pre, cur) => {
    if (!pre[cur]) {
      pre[cur] = 1
    } else {
      pre[cur] += 1
    }
    return pre
  }, {})
}
console.log(calcRepeatNumber(arr))

// 计算年龄，满足大于18的返回年份和年龄
function calcAge(arr) {
  let currentYear = new Date().getFullYear()
  console.log(currentYear)
  return arr.reduce((pre, cur) => {
    const distanceNum = currentYear - cur
    if (distanceNum >= 18) {
      pre.push({
        cur,
        distanceNum
      })
    }
    return pre
  }, [])
}
let arr = [1995, 1997, 1999, 2000]
console.log(calcAge(arr))
```
