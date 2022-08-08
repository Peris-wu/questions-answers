# 文件上传

```
最常用的两种上传方式
1: form-data  --> 'Content-Type': 'multipart/form-data'
2: base64  --> 'Content-Type': 'application/x-www-form-urlencoded'

1: 
  file
  const formData = new FileReader()
  formData.append('file',file)
  formData.append('filename',file.name)
  axios.post(url,formData,{headers:{
    'Content-Type': 'multipart/form-data'
  }
  })

2: 
  2.1 将文件流file转换为base64格式
  2.2 为防止出现乱码,通过encodeURIComponent()进行编码  decodeURIComponent()解码
  2.3 通过axios发送base64数据
  file
  const fileReader = new FileReader()
  fileReader.readAsDataURL(file)
  fileReader.onload = function(event){
    const handleFile = event.target.result //base64
    axios.post(url,{chunk:handleFile,filename:filename})
  }

 以上两种方式是将整个文件以form-data或base64的方式发送给服务端
```

#  大文件以切片的方式发送给服务端,实现断点续传、秒传的功能

```
前端准备工作:

1: 获取到选择的文件(File),通过FileReader将之转换为Buffer流
2: 通过spark-md5将该文件的Buffer生成hash值(spark-md5->内容不变的话生成的hash也不会变)
3: 将File进行切片(file.slice()),可以通过固定file大小、固定数量进行切片(按需选择)
4: 在File切片时，将file切片、filename 保存在一个对象{chunk:file.slice(),filename:filename}中,然后将这个对象保存在数组中
5: 遍历4生成的数组，将file切片添加进formData(FormData.append('file',file) FormData.append('filename',filename)) ,生成发送切片给服务端请求的方法,将该方法保存在一个新的数组中
6: 由于需要断点续传的功能，无法使用遍历进行切片的发送，所以采用串联的方式进行递归发送请求,初始化一个索引为0，定义一个发送请求的方法，当索引大于数组长度时，即所有的切片发送完毕，则发送一个merge请求给服务端，每一个切片发送请求结束时，索引自增1，再继续调用发送请求的方法进行递归

        let i = 0
        const complete = async () => {
          await axios.post(
            '/uploads/merge',
            {
              hashFileName: localStorage.getItem('hash')
            },
            {
              headers: {
                'Content-Type': 'application/json'
              }
            }
          )
        }
        const send = async () => {
          if (i >= requestArr.length) {
            complete()
            return
          }
          await requestArr[i]()
          i++
          send()
        }
        send()


服务端准备工作:

1: 解析前端发送过来的form-data 切片数据，这里需要通过中间件来处理(个人用的是multiparty，express-fileupload)
2: 获取切片文件的hash值，定义merge后存放的路径（目标路径），定义定义切片存放的临时文件夹路径，
判断以hash命名的文件夹是否存在，不存在的话，则创建，判断以切片originalname命名的文件file是否存在，存在则直接返回数据给前端（这里是秒传，断点续传的关键）,不存在的话则创建，然后返回数据给前端
3: merge接口，接受前端发送过来的需要merge的hash值，通过readdirSync读取文件夹下的所有文件，返回一个由文件名组成的数组,对该数组进行排序，然后生成后缀名，然后通过fs.appendFileSync在目标路径合并所有切片,合并完一个切片删一个切片，合并完成后把临时生成的hash文件夹也删除

```



