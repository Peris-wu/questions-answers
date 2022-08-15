function handleJson(arr, obj) {
  return arr.reduce((result, nextVal) => {
    return result[nextVal]
  }, obj)
}

function Observer(_data) {
  if (!_data || typeof _data !== 'object') return
  Object.keys(_data).forEach((key) => {
    let value = _data[key]
    this.Observer(_data[key])
    Object.defineProperty(_data, key, {
      enumerable: true,
      configurable: true,
      get() {
        return value
      },
      set(newValue) {
        value = newValue
        Observer(newValue)
      }
    })
  })
}
class Vue {
  constructor(_instance) {
    this.$data = _instance
    Observer(this.$data.data)
    new Compile(_instance.el, this.$data)
  }
}
class Compile {
  constructor(el, vm) {
    this.$el = this.isNodeElement(el) ? el : document.querySelector(el)
    this.$vm = vm
    const fragment = this.createFragment(this.$el)
    this.compiler(fragment)
    this.$el.appendChild(fragment)
  }
  isNodeElement(node) {
    return node.nodeType === 1
  }
  createFragment(node) {
    const _fragment = document.createDocumentFragment()
    let _child
    while ((_child = node.firstChild)) {
      _fragment.append(_child)
    }
    return _fragment
  }
  compiler(node) {
    let pattern = /\{\{\s*(\S+)\s*\}\}/
    if (this.adjustNodeType(node)) {
      // nodeType === 3 文本节点
      const result_regexp = pattern.exec(node.nodeValue)
      if (result_regexp) {
        console.log(result_regexp)
        const keyArr = result_regexp[1].split('.')
        const map_result = handleJson(keyArr, this.$vm.data)
        node.nodeValue = node.nodeValue.replace(pattern, map_result)
        console.log(node.nodeValue)
      }
    } else {
      // nodeType !== 3 元素节点
      let _childNodes = Array.from(node.childNodes)
      _childNodes.forEach((node) => this.compiler(node))
    }
  }
  isElementNode() {}
  isTextNode() {}
  adjustNodeType(node) {
    return node.nodeType === 3
  }
}
let vm = new Vue({
  el: document.querySelector('#app'),
  data: {
    name: 'peris',
    age: 18,
    hobby: {
      first: 'game'
    }
  }
})
