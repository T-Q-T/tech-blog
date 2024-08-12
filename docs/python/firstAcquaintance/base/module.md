# 模块 

python 可以类似于 js 一样使用各个文件的函数，使用关键字 import fileName 即可引入对应文件的模块

index.py
```
import test
print(test.f())
// I am test
```
test.py
```
def():
 print('I am test')

```

可以 from xxx import 导出某个模块的内容

可以在文件顶部增加 **if __name__ == "__main__":** ，让代码仅在作为脚本而非模块使用,
下面代码中，增加了 **if __name__ == "__main__":** 的内容仅会在运行 python3 test.py 时执行,运行 index.py （即作为模块被使用时）**if __name__ == "__main__":** 的内容将会被忽略

index.py
```
import test
print(test.f())
// I am module test
```
test.py

```
if __name__ == "__main__":
 def f():
   print('I am script test')


def f():
   print('I am module test')

```

可通过 dir() 函数获取模块的导出的方法内容