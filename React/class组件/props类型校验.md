# props 类型校验

1: npm install prop-types

```
// class:

1:
import PropTypes from 'prop-types'
class Home extends Component {
  static propTypes = {
    msg: PropTypes.string
  }
  // 默认值设置
  static defaultProps = {
    msg: '666'
  }
}
2:
Home.propTypes = {
  msg: PropTypes.string
}

// function:
import PropTypes from 'prop-types'

// 函数组件的默认值设置 推荐使用es6的函数默认值使用方式

<!-- function Home({test='666'}){
  const {test} = props
} -->

function Home(props){
  const {test} = props
}
Home.propTypes = {
  msg: PropTypes.string
}
```
