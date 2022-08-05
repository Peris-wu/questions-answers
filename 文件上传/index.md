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
  2.2 为防止出现乱码,通过encodeUriComponent()进行编码
  2.3 通过axios发送base64数据
  file
  const fileReader = new FileReader()
  fileReader.readAsDataURL(file)
  fileReader.onload = function(event){
    const handleFile = event.target.result //base64
    axios.post(url,{chunk:handleFile,filename:filename})
  }
```

