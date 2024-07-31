# 字符串类型

大部分特性与 js 相同,以下列举一些不同的特性

1、可以在字符串前增加 r 标识让程序识别为不对字符串进行转译,增加 f 标识可引用变量（类似 js 模版字符串)

```
print('C:\some\name')
C:\some
ame

print(r'C:\some\name')
C:\some\name

t='123'
print(f"{t}test")
123test
```

2、"""xxxx""" 三引号代表多行模式，有点类似于 js 的模版字符串 ``。

```
print("""\
Usage: thingy [OPTIONS]
     -h                        Display this usage message
     -H hostname               Hostname to connect to
""")

Usage: thingy [OPTIONS]
     -h                        Display this usage message
     -H hostname               Hostname to connect to
```

3、字符串运算，* 标识重复多次，相邻的字符串会自动合并（只能用于字面量，如果是变量会报错）

```
3 * 'un' + 'ium'
'unununium'

'Py' 'thon'
'Python'
```

4、字符串切片，类似于 js 的 string.subString 方法,开始索引默认为 0,结束索引默认为字符串最后一位

```
"test"[0:2]
'te'

"test"[:2]
'te'

"test"[1:]
'est'
```

5、字符串类型不可修改，调整字符串需新建

6、内置函数 len() 返回字符串长度

# 列表类型 

整体类似于 js 的数组类型,以下仅列举差异点

1、加法在 js 中会被 js 引擎调用 toString 方法再执行相加操作,python 中则可以直接合并,类似于 js 的 concat 操作
```
[1,2,3]+[4,5,6]

[1,2,3,4,5,6]
```

2、切片-类似于字符串的切片，注：对切片进行操作会修改原始变量值 即切片切出的是原始变量的内存空间
```
[1,2,3,4,5][0:2]
[1,2,3]

test=[1,2,3,4,5]
test[0:2]=["a","b","c"]
print(test)
// ['a', 'b', 'c', 3, 4, 5]
 
```
3、常用 API 
**append** 向列表末尾添加元素
**remove** 删除列表指定值
**pop** 删除列表指定索引值
**clear** 清空列表
**del** 删除列表指定索引值 (可输入切片删除片段)


# 列表推导式

基本逻辑为,从左往右代表常规语句的从上到下，每碰到关键字就相当于缩进体一次,首个表达式为列表每项内容
```
squares=[x**2 for x in range(10)]
//等价于
squares=[]
for x in range(10):
    squares.append(x**2)
```

<br>


# 元组

元组是 Python 的数据结构，类似列表，用多个逗号隔开表示，元组是不可修改的

```
t=123,123,"hello"
// (123,123,"hello")

t[0] = 88888
// 报错，元组修改值不被允许
```

# 集合

集合与 js 的 set 类似，但是写法上是由花括号创建,或者使用 set() 创建，集合本身自带去重效果

```
basket={"a","b","c"}

t=set("abccccc")
//自动去重 {"a","b","c"}
```

集合操作
**-** 差集操作 （以第一项为基础，去除第二项中的相同部分)
**｜** 并集操作  (即合并两项)
**&** 交集操作   (即去掉两项不同部分)
**^** 对称差集操作 (即去掉两项重复项，合并两项)


# 字典

字典以键进行索引，键可以是任何不可变类型

# 参考
 https://docs.python.org/zh-cn/3/tutorial/introduction.html