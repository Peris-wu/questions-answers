# 节流 (触发高频事件，N秒内只执行一次)

```
// 延时器版
    function throttle(callback, wait) {
        let timer = false
        return function () {
          if (timer) return
          timer = setTimeout(() => {
            timer = false
            callback()
          }, wait)
        }
    }
// 时间戳版
    function throttle01(callback, wait) {
      let time = 0
      return function () {
        let now = new Date()
        if (now - time > wait) {
          time = now
          callback()
        }
      }
    }
```