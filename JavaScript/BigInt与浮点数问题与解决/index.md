## BigInt 是一种新的基本数据类型 用于解决大数(最大安全数)的问题

最大安全数-> Number.MAX_SAFE_INTEGER (9007199254740991)

当 number 超过最大安全数就会丢失精度

example
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2 true

let a = BigInt(66)
let a = 66n
上述两种都是创建 BigInt 数据类型的方式

浮点数问题
0.1 + 0.2 !=0.3

## 可以使用 number-precision 的库来解决
