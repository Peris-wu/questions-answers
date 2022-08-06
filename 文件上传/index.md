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
6: 遍历新数组(数组中每个元素代表着每个将切片发送到服务端的方法),调用方法,在调用方法的时，可以进行其他操作，比如说暂停。


服务端准备工作:


```



