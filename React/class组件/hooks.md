# hooks

优势：

1: 解决了在类组件中业务逻辑难以分离的问题
2: 方便状态逻辑复用

**_ hooks 只能在函数组件中使用 _**

```
1: useState

const [state,setState] = useState(initialState)

initialState是state的初始值，在后续的更新中，useState返回的始终是最新的state

// 更新state的两种方式

1:setState(state+1)
2:setState((state)=> state + 1)

2: useEffect
// 函数副作用
// 可以模拟类组件的componentDidMount componentDidUpdate componentWillUnmount

1: useEffect(()=>{})
// 第一种情况是不添加依赖项,则该函数组件第一次挂载后和后续的更新都会执行useEffect的回调函数
2: useEffect(()=>{},[])
// 第二种情况是添加一个[]依赖项，则是在该函数组件第一次挂载后，只执行一次useEffect的回调函数
3: useEffect(()=>{}，[a,b,c])
// 第三种情况是添加n个依赖项，如果依赖项中有发生改变，则执行useEffect的回调函数

4: useEffect(()=>{
  return ()=>{

  }
})
// return 的函数只有在该函数组件销毁前执行



3: useCallback
// 缓存一个函数
1: useCallback(()=>{})
// 第一种情况,只有一个函数参数，则该函数组件初次渲染时和后续更新时，函数中使用的状态都是最新的，体现不出缓存的效果

2: useCallback(()=>{},[])
// 第二种情况,第二个参数是一个[],则该函数组件初次渲染时,函数参数中使用的状态是什么，在后续的更新中，即使状态发生变化了，该函数中的状态也依然是初始时的状态

3: useCallback(()=>{
  console.log(a,b,c)
},[a,b,c])
// 第三种情况,第二个参数是一个[a,b,c]即存在依赖项,则该函数组件在后续的更新中，如果依赖项发生了变化，则函数中使用的状态则是更新后的状态，如果依赖项未发生变化，则函数中使用的状态则是上一次的状态

4: useMemo
// 缓存状态
// 与useCallback 大同小异

5: useReducer

6: useContext

// 这个hook 与 类组件的createContext使用的区别在于Consumer发生了变化
const MyContext = createContext()

app.jsx:
import MyContext from ''
<MyContext.Provider value = {this.state}>
  <div></div>
</MyContext.Provider>

son component:
import MyContext from ''
import {useContext} from 'react'
function Son(){
  const value = useContext(MyContext)
  // value 就是顶层组件传递过来的状态
  return <div></div>
}

7: useRef
// 生成一个ref，用于dom元素的获取
const _ref = useRef()

<div ref={_ref}>test</div>
```
