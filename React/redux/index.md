# redux(状态管理)

// 当像深层次的组件传递数据时，props 显得很麻烦，如果是 eventBus 的传递方式，在多组件需要用到状态时，每个组件都需要订阅，也很麻烦，这个时候可以考虑 redux。

// 与 redux 配合使用的 package 有
1: react-redux // store 的注入，state 的获取、dispatch 派发
2: react-thunk // 解决异步 action 问题

// 配置 redux step
(个人的规范)
1: constant
2: actions
3: reducer
4: component

```
store/index.js
import { createStore } from 'redux'
import reducers from './reducers/index'

const store = createStore(reducers)
export default store

入口问题件:
import { Provider } from 'react-redux'
import store from './store/index'
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)


// 组件使用state
import { useSelector, useDispatch } from 'react-redux'
import { userDel, userChangeState } from '../store/actions/index'
// 获取redux state
const users = useSelector((state) => state.userReducer)
// 派发dispatch
const dispatch = useDispatch()
dispatch(userDel())
```
