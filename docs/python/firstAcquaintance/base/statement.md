# 循环语句 while

基本逻辑与 js 一致，基本格式为 while 条件，条件非零就会执行循环（字符串则会判断字符串长度是否为零）
执行内容为缩进体（缩进代表循环执行内容，缩进结束位置即为执行体结束位置)

```
a, b = 0, 1
while a < 10:
  print(a)
  a, b = b, a+b
print('end',end=",")
// 输出
0,1,1,2,3,5,8,end
```

# 分支语句 if

基本逻辑与 js 一致,elif 代表 else if

```
x=1
if x>0:
  print("x>0")
elif x<0:
  print("x<0")
else:
  print("x=0")
```

# 循环 for 语句 

与 js几乎一致，基本格式为 for val in iterable: ,与 while 相同,缩进体代表执行内容

```
words = ['cat', 'window', 'defenestrate']
for w in words:
    print(w)
'cat'
'window'
'defenestrate'
```

# else 子句 

Python 中 for/while 循环语句可以有 else 子句，当循环正常结束时执行，break 语句终止循环时不执行

```
for i in range(5):
    print(i,end=',')
else:
    print('end')
0,1,2,3,4
end
```

# match 语句 Python 3.10.0 之后才支持
类似于 js 的 switch 语句, case 代表不同切换的分支，_ 表示通配符（相当于 default),与 js 不同点在于无需手动 break,只会匹配一条分支

```
a = 10
match a:
    case 10:print('sss')
    case _:print('_')
```

# 函数

使用 def 定义，基本格式为 def 函数名(参数):,缩进体代表执行内容,值得注意的是，函数的形参初始值会共享数据

```
def f(a,L=[]):
    L.append(a)
    return L
f(1)
f(2)
a=f(3)
print(a)
//[1, 2, 3]
```
Python 的形参在函数调用时，可以不顺从定义时的顺序使用，使用定义时形参的关键字即可（也被称为关键字形参）可在函数形参口增加 * 进行限制

```
def test(a,b="0",c="1"):
    print(a,b,c)
//使用了关键字参数调整了顺序
test(10,c="c",b="b")
//10 b c
```

Python 函数具有类似 js arguments 的用法,*args 代表可变参数，**kwargs 代表关键字参数

```
def test(kind, *arg, **keywords):
    print(arg)
    print(keywords)

test("const", "1", "2",kwa1="3",kwa2="4",kwa3="5")
('1', '2')
{'kwa1': '3', 'kwa2': '4', 'kwa3': '5'}
```

* 或者 ** 类似于 js 的解构操作符 ... ,用于把参数解构（Python 中叫解包)

```
arg=[1,5]
range(*arg) 等价于 range(1,5)
<!-- 分割线 -->

def test(v,s,a):
    print(v,s,a)
d={v:"value",s:"status",a:"action"}
test(**d)
// value status action
```