# 基本数据类型
1: Stirng
2: Number
3: Boolean
4: null
5: undefiend
6: symbol
7: BigInt

# 引用数据类型(复杂数据类型)
1: Object

#  字符串模板 ``
通过${} 可以使用变量 比用''拼接更简单明了

#  let const 声明变量的关键字

共同:
1: 没有变量提升
2: 存在暂时性死区
3: 不可重复声明同名变量 
不同:
1: const 声明必须初始化
2：const 一旦声明无法进行更改

#  ()=>{} 箭头函数

1: 没有自己的this (this在声明时就注定了)
2: 没有arguments


# 字符串
```
1 String.prototype.substring(startIndex[,endIndex])
  // 截取字符串
  startIndex > endIndex 两者则互换
  startIndex || endIndex 小于0或者NaN 则被当做是0
  startIndex === endIndex 返回空字符串
  endIndex为空 则截取到字符串末尾
  不影响原来字符串
2 String.prototype.slice(beginIndex[, endIndex])
  // 截取字符串
   不影响原来字符串
3 String.prototype.includes(target) 
  // 查找字符串中某一字符 
  返回值为true || false
4 String.prototype.indexOf(target)
  // 查找字符串中某一字符 
  返回值为目标字符的索引，否则返回-1
5 String.prototype.repeat(number)
  // 重复number次字符串
6 String.prototype.padStart(strLength[,padString])
  // 填充字符串
  strLength 填充后的字符串长度
  padString省略时，则以''填充
  padString的长度大于strLength 则从左往右开始截取padString填充
7 String.prototype.padEnd()

8 String.prototype.startsWith(string)
  // 判断字符串是否以string开始

9 String.prototype.endsWith()
  // 判断字符串是否以string结束

10 String.prototype.replace()

11 String.prototype.match()

```

# Array
```
Array.prototype.push()
// 返回数组操作后的长度
Array.prototype.unshift()
// 返回数组操作后的长度
Array.prototype.pop()
// 返回被删除的元素
Array.prototype.shift()
// 返回被删除的元素

Array.prototype.indexOf(target)
// 返回目标元素的索引,否则返回-1

Array.prototype.findIndex(()=>{})
// 返回目标的索引值
// 可以结束后续的操作

Array.prototype.find(()=>{})
// 返回目标的元素
// 可以结束后续的操作

Array.prototype.sort()
// 默认数组升序排序

Array.prototype.reduce((result,next)=>{},result)

Array.prototype.splice(start[,length,'插入的内容'])

// 可对数组进行插入、删除、替换的操作

Array.prototype.slice(start，end)
// 截取数组的元素，返回一个新数组

Array.prototype.join('')
// 将数组转变为字符串

Array.prototype.concat()
// 合并数组，不影响原数组

Array.prototype.map()
// 可以在数组的基础上操作，返回一个新数组

Array.prototype.forEach()
// 遍历数组

Array.prototype.filter()
// 过滤元素，返回一个新数组
// 不影响原数组

Array.prototype.flat()
// 扁平化多维数组,默认处理深度为1的数组

Array.prototype.fill(value,start,end)
// 向数组填充（替换）元素

Array.prototype.from()
// 将类数组转化为真数组

Array.prototype.some(()=>{})
// 数组中是否存在满足某一条件的元素
// 可以结束后续的操作
// 返回boolean

Array.prototype.every(()=>{})
// 数组中的所有元素是否都满足某一条件
// 返回boolean

Array.prototype.includes(target)
// 返回boolean
```

# Math

```
Math.abs() 
// 绝对值

Math.floor()
// 向下取整

Math.ceil()
// 向上取整

Math.random() 
// 返回一个0<=x<1的随机数

Math.round()
//返回四舍五入后的整数

Math.max()
// 返回传入参数的最大值

Math.min()
// 返回传入参数的最小值

Math.sign()
// 返回值有1 -1 0 -0 NaN
// 传入该函数的参数会被隐式转换成数字类型

Math.trunc()
// 数字的小数部分去掉，只保留整数部分
```

