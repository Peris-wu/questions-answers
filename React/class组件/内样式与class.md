# react 内样式使用

1: 单个样式属性使用驼峰命名 backgroundColor
```
<div style={ { backgroundColor:'red' } }>
</div>
```


# react className

1：可以通过三元表达式动态添加类样式
```
state={
  isShow:false
}
<div className={this.state.isShow?'home-wrap':''}>
</div>
```