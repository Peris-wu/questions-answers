# typescript(javascript 的超集)

**_ 优势 _**

1: 提供可选的强静态类型
2: 在编译阶段就可以检测错误
3: 提高代码的健壮性
4: 方便代码的重构
5: 更加友好的 IDE 提示

**_ 缺点 _**

1: 学习成本高
2: 需要写更多的代码
3: 不是真正的静态类型

## 数据类型

boolean number string undefined null symbol never any void

tuple 元组类型

array 数组类型

object 对象类型

## 类型注解

```
// boolean
let isShow:boolean = false

// string
let name:string = 'name'

// number
let num:number = 6

// undefined
let unde:undefined = undefined

// null
let nul:null = null

// any
let js:any = 1
js = 'js'

// void
const fn = ():void=>{
 // return undefined 也没错,不过这样写就是多此一举
}
// 实际上fn的执行返回undefined

// never 这个是没有任何东西返回包括undefined,也只有报错的时候没有东西返回
const fn = ():never=>{}

// tuple元组,固定长度的数组
let arr:[number,string] = [1,'a']

// array数组
let arr:Array<number> = [1,2,3,4,5]
let arr: number[] = [1,2,3,4,5]

//object数组
let obj:{
  name:string
  readonly age:number,
  sex?:string,
  [propsName:string]:any
  }={
  name:'peris',
  age:18
}
// ?: 可选属性 即对象可包含该属性，也不可不包含

// [propsName:string]:any  索引签名,当对象中有其他不确定的属性的时候可以使用

// readonly 只读属性 无法修改
```
