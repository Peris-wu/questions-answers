interface ILength {
  length: number
}

function getLength<T extends ILength>(a: T) {
  return a.length
}
let res = getLength<string>('123')
console.log(res)
