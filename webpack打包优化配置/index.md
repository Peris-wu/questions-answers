# webpack 打包优化配置

1\*: 通过 externals 方式将第三方模块使用 cdn 模式加速(减少包的体积，优化首屏渲染)

```
  webpack.config.js 配置
    configureWebpack:{
      // key->包名  value-> 挂载在全局作用域window下的变量名
      value可以通过引入cnd的方式查找挂载在window下的变量名
      // <script src="https://unpkg.com/vant@2.12/lib/vant.min.js"></script>
      // 然后去查看window对象
      externals:{
        vue: 'Vue',
        vuex: 'Vuex',
        axios: 'axios',
        'vue-router': 'VueRouter',
        vant: 'vant',
        lodash: '_'
      }
    }

  html配置
  将使用cdn的模块使用cdn模式引入
  //<script src="https://unpkg.com/vant@2.12/lib/vant.min.js"></script>
```

2\*: 开启 gzip 压缩

```
1:
webpack.config.js 配置

  // npm i compression-webpack-plugin -D
  const CompressionPlugin = require('compression-webpack-plugin')
  configureWebpack:{
    plugins:[
      new CompressionPlugin({
        filename: '[path][base].gz',
        test: /\.js$|\.html$|\.css/,
        threshold: 10240,
        deleteOriginalAssets: false
      })
    ]
  }
2: nginx 开启gzip
  // 详情看nginx总结
```
