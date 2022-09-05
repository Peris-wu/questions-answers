function handleJson(arr, obj) {
  return arr.reduce((result, nextVal) => {
    return result[nextVal]
  }, obj)
}
function Observer(_data) {
  if (!_data || typeof _data !== 'object') return
  let dependency = new Dependency()
  Object.keys(_data).forEach((key) => {
    let value = _data[key]
    Observer(_data[key])
    Object.defineProperty(_data, key, {
      enumerable: true,
      configurable: true,
      get() {
        Dependency.temp && dependency.addWatch(Dependency.temp)
        return value
      },
      set(newValue) {
        value = newValue
        Observer(newValue)
        dependency.notify()
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
    let pattern = /\{\{\s*(.+?)\s*\}\}/g
    if (this.adjustNodeType(node)) {
      // nodeType === 3 文本节点

      const originNodeValue = node.nodeValue
      let result_regexp = pattern.exec(node.nodeValue)
      if (result_regexp) {
        node.nodeValue = node.nodeValue.replace(pattern, (_, key) => {
          const keyArr = key.split('.')
          new Watcher(this.$vm, keyArr, (newValue) => {
            console.log(newValue)
            node.nodeValue = originNodeValue.replace(pattern, newValue)
          })
          return handleJson(keyArr, this.$vm.data)
        })
        // const keyArr = result_regexp[1].split('.')
        // const map_result = handleJson(keyArr, this.$vm.data)
        // node.nodeValue = originNodeValue.replace(pattern, map_result)
        // new Watcher(this.$vm, keyArr, (newValue) => {
        //   node.nodeValue = originNodeValue.replace(pattern, newValue)
        // })
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

class Dependency {
  constructor() {
    this.subWatches = []
  }
  addWatch(watch) {
    this.subWatches.push(watch)
  }
  notify() {
    this.subWatches.forEach((watch) => {
      watch.update()
    })
  }
}

class Watcher {
  constructor(vm, keySplit, callback) {
    this.vm = vm
    this.keySplit = keySplit
    this.callback = callback
    Dependency.temp = this
    handleJson(this.keySplit, this.vm.data)
    Dependency.temp = null
  }
  update() {
    const result = handleJson(this.keySplit, this.vm.data)
    this.callback(result)
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
