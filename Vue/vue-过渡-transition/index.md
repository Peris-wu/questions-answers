# vue transition 动画

// example router-view 的切换动画
vue2:
进场
v-enter：定义进入过渡动画的开始状态

v-enter-active: 定义进入过渡生效时的状态

v-enter-to: 定义进入过渡的结束状态

离场

v-leave: 定义离开过渡动画的开始状态

v-leave-active: 定义离开过渡生效时的状态

v-leave-to: 定义离开过渡的结束状态

**_ 因加入了过渡动画，X 轴出现短暂的滚动条 css 缺陷 _**
解决: 在外层添加一个 div 盒子，overflow:hidden

```
<div style="overflow:hidden">
  <transition name="">
    <router-view></router-view>
  </transition>
</div>
```
