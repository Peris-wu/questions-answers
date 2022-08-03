# 删除排序数组中的重复项

```
// 采用的是双指针的方式解决
// 指针left 初始值0 指针right 初始值1
// left对应的元素与right对应的元素相等 则right指针+1，
// left对应的元素与right对应的元素不相等 则left指针先++（++left）,然后right指针对应的元素复制给left指针对应的元素
const removeDuplicates = function (nums) {
  if (nums === null || nums.length === 0) return
  let left = 0
  for (let right = 1; right < nums.length; right++) {
    if (nums[left] !== nums[right]) {
      nums[++left] = nums[right]
    }
  }
  return ++left
}

```