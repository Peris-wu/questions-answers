# 对象扁平化

```
function objectFlat(obj) {
  const result = {}
  function _flat(_obj, key) {
    Object.entries(_obj).forEach(([_key, val]) => {
      let newKey = key ? `${key}.${_key}` : _key
      if (val && typeof val === 'object') {
        _flat(val, newKey)
      } else {
        result[newKey] = val
      }
    })
  }
  _flat(obj)
  return result
}

// 测试
const source = { a: { b: { c: 1, d: 2 }, e: 3 }, f: { g: 2 } }
console.log(objectFlat(source))

```
