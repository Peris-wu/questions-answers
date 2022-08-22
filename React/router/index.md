# react-router-dom@5

1: HashRouter (url 带有#)

```

HashRouter // 视图容器 类似vue router-view
Switch     // 匹配成功，将不会继续匹配
Route      //
render     // 可以做路由拦截 类似vue 路由守卫

<HashRouter>
  <Switch>
      <Route path="/home" component="Home" render={()=>{return component}}></Route>
      <Route path="/news" component=""></Route>
      <Route path="/about" component=""></Route>
  </Switch>
</HashRouter>

//      /home  一级路由

二级路由:
在Home组件中继续配置二级路由
<Switch>
      <Route path="/home/first" component="" render={()=>{return component}}></Route>
      <Route path="/home/second" component=""></Route>
      <Route path="/home/three" component=""></Route>
      <Redirect from="/home" to="/home/first"></Redirect>
  </Switch>

```

2: BrowserRouter (需要服务端配合)
// 用法跟 HashRouter 一样

# 路由传值(两种方式)

1: 动态路由传值

```
history.push('/detail/123')
<Route path="/detail/:id" component=""></Route>

detail组件中:
props.location.match 可以获得id //因为是在url中获取id，所以刷新也不会丢失

```

2: 常规传值

```
  history.push({
    pathname:'/detail',
    query:{
      id:'123'
    }
  })
  history.push({
    pathname:'/detail',
    state:{
      id:'123'
    }
  })
  detail组件中:
  // 这种方式将传递的值保存在内存中，所以刷新后，传递的值会丢失
  props.location.query 可以获得id
  props.location.state 可以获得id
```
