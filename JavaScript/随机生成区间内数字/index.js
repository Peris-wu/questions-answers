function createRandom(min, max) {
  // 不包含上限
  return Math.floor(Math.random() * (max - min) + min)
  // 不包含下限
  return Math.floor(Math.random() * (max - min + 1) + min + 1)
  // 包含上下限
  return Math.floor(Math.random() * (max - min + 1) + min)
}
