# page.json config

page: 设置页面路径及窗口表现
// page:[{path:"",style:{}}] style 设置的属性会覆盖 globalStyle 属性

// navigationBar(顶部导航栏)
1: navigationBarTitleText: 顶部导航栏标题文本设置
2: navigationBarTextStyle: 顶部导航栏文本的颜色设置
3: navigationBarBackgroundColor: 顶部导航栏背景颜色设置
4: backgroundColor: 下拉显示出来的窗口的背景色
5: enablePullDownRefresh 是否开启下拉刷新功能
6: onReachBottomDistance 页面上拉触底事件触发时距页面底部距离，单位只支持 px

globalStyle: 设置默认页面的窗口表现
// navigationBar(顶部导航栏)
1: navigationBarTitleText: 顶部导航栏标题文本设置
2: navigationBarTextStyle: 顶部导航栏文本的颜色设置
3: navigationBarBackgroundColor: 顶部导航栏背景颜色设置
4: backgroundColor: 下拉显示出来的窗口的背景色
5: enablePullDownRefresh 是否开启下拉刷新功能
6: onReachBottomDistance 页面上拉触底事件触发时距页面底部距离，单位只支持 px

tabBar:设置底部 tab 的表现
// tabBar:{
color:"", // tab 上的文字默认颜色
selectedColor:"" // tab 上的文字选中时的颜色
backgroundColor: "" // tab 的背景色
borderStyle: "" // tabbar 上边框的颜色
fontSize: "" // 字体大小
list:[{}],
// list {} 属性
pagePath : "" // 页面路径，必须在 pages 中先定义,
text: "" // 文本
iconPath: "" // 图片路径
selectedIconPath: "" // 选中时的图片路径
iconfont : "" //字体图标，优先级高于 iconPath

position: "" // 可选值 bottom、top
}
