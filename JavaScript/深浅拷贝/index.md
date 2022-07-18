## 深浅拷贝

概念:
浅拷贝:不在堆内存中重新开辟空间，只是复制了栈内存中的引用地址
深拷贝:在堆内存中重新开辟一个存储空间，完全克隆一个一模一样的对象
实现：
1：JSON.parse(JSON.stringify())
```
  JSON.parse(JSON.stringify())
  缺陷：
  1：不能复制函数
  2：不能复制属性值的undefined的属性
2：使用递归的方式
  function deepClone(obj) {
      if (typeof obj !== 'object' || obj === null) return obj
      let res
      if (obj instanceof Array) {
        res = []
      } else {
        res = {}
      }
      for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
          console.log(obj.hasOwnProperty(key))
          res[key] = deepClone(obj[key])
        }
      }
      return res
    }
```