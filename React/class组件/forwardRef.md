# forwardRef(透传)

// 父组件的 ref 透传给子组件使用
// 如果是直接通过属性的方式传递一个 ref 给子组件使用，这样函数组件会报警告 类组件没什么问题(不推荐)
// 无法给函数组件使用 ref 属性，需要给通过 forwardRef 给函数组件套一层才能使用 ref 属性,这样就会把 ref 传递给函数组件的第二个型参

```

parent component:

const ref = useRef()
<div>
  <child ref={ref}></child>
</div>



child component:
import { forwardRef } from 'react'

const child = (props,ref)=>{
  <div>
    <input value={} ref={ref} />
  </div>
}
export default forwardRef(child)
```
