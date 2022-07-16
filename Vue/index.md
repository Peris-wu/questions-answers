## keep-alive
```
<keep-alive
  include="" // 需要缓存的组件
  exclude="" // 不需要缓存的组件
  max="" //缓存组件的最大数量
></keep-alive>
```

## 生命周期
activated
deactivated
created > mounted > activated

进入被缓存的组件页面时调用activated
离开被缓存的组件页面时调用deactivated