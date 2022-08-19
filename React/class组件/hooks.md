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

3: useCallback

4: useMemo

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
```
