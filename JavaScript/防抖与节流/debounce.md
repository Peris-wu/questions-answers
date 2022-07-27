#  防抖 (触发高频事件，N秒内只执行一次，如果N秒内再次被触发则从新计算时间)

```
function debounce(callback, wait) {
      let timer = null
      return function () {
        let args = arguments
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
          callback(...args)
        }, wait)
      }
    }
```