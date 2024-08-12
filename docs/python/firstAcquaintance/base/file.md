# 文件操作模块

在 Python 中能够进行文件系统操作
<br>

**创建文件对象**
使用 open(filePath,'r|w|r+',encoding='utf-8') 方法创建一个文件对象,第一个参数 filePath 为文件路径<br>
第二个参数为操作类型 r-读、w-写、r+ 读写,关键字参数 encoding 内容编码格式<br>
使用 with 关键字处理文件类型会在子语句结束时自动关闭文件流

```
f=open('index.py','r',encoding='utf-8')
f.closed
//false
//Python 不会自动关闭文件流对象

with open('index.py', encoding="utf-8") as f:
    read_data = f.read()

f.closed
//true  with 子语句结束后，文件流被自动关闭
```

文件流基本操作 (需先创建一个文件流对象 f)

可对文件流对象循环,读取每行内容 
```
f =open('./test/index.py','r')
for line in f:
    print(line)
//将一行一行的打印 test/index.py 内容
```

# 方法集合

**f.read(size)**:读取文件内容，并以字符串形式返回，可输入 size 限制读取的内容长度
**f.readline()**:读取文件单行的内容 
**f.write(string)**:将输入写入文件**完全覆盖内容，非增加写入**,方法会返回写入字符数
**f.seek(offset,whence)** 配合 read(size) 使用，用于将读取文件的起始点推移 offset 个字符数，whence ==2 时表示从文件末尾读起