## 图片懒加载
原理：将图片的src属性设为data-src(这样一来图片就不会加载),当图片出现在可视区获取图片的data-src属性，然后为images添加src属性 值即为data-src的值
通过intersectionObserver对图片进行监测

```
    <img data-src="./images/01.jpeg" alt="" />

    function callback(enteries) {
      enteries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          const image = entry.target
          const dataSrc = image.getAttribute('data-src')
          image.setAttribute('src', dataSrc)
          observer.unobserve(image)
        }
      })
    }
    let observer = new IntersectionObserver(callback)
    let imgList = document.querySelectorAll('img')

    let imgListArr = Array.from(imgList)
    imgListArr.forEach((img) => {
      observer.observe(img)
    })

```

