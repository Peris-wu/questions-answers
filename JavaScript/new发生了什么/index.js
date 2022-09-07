const _new = function (constructor) {
  // 创建一个空对象
  const obj = {}
  // 原型链挂载
  obj.__proto__ = constructor.prototype
  // 将obj 复制给构造体中的 this，并且返回结果
  const result = constructor.call(obj)
  // 如果返回对象不为一个对象则直接返回刚才创建的对象
  return typeof result === 'object' && result !== null ? result : obj
}
