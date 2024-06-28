# 简介
模块描述： 用于处理文件路径及目录路径的一个nodejs内置模块
常用功能：路径的解析(path.parse()) 、拼接(path.join())、规范化(path.normalize())等
使用方式：使用require函数引入
> path 模块的默认操作因 Node.js 应用程序运行所在的操作系统而异  本文都是以windows为例
## 方法
### path.isAbsolute(path)
- 作用

描述 | 返回值
:--:| :--:
用于检测一段路径是否为绝对路径 | Boolean值 true为是

- 参数

参数 | 描述 | 类型 | 是否可选 
:--: | :--: | :--: | :--:
path | 一段路径 | String| 必须
```js
const path = require('path'); 
var p1 = 'D:/study/nodejs/path/path.js';
console.log(path.isAbsolute(p1));  // 返回true
```
### path.join([...path])
- 作用

描述 | 返回值
:--:| :--:
按传入顺序拼接字符串为一段路径| 拼接后的一段路径字符串

- 参数

参数 | 描述 | 类型 | 是否可选 
:--: | :--: | :--: | :--:
path | 一段路径 | String| 必须 (可以传入多个)

示例：
```js
const path = require('path'); 
console.log(path.join('../start',"a.js")) // 返回../start/a.js
```
### path.normalize(path)
- 作用

描述 | 返回值
:--:| :--:
对传入路径规范化后返回 | 规范化后的路径字符串

- 参数

参数 | 描述 | 类型 | 是否可选 
:--: | :--: | :--: | :--:
path | 一段路径 | String| 必须

示例：

```js
const path = require('path'); 
console.log(path.normalize("../start/../../tips/../nodejs/start/a.js")); // 返回 ../../nodejs/start/a.js
```
### path.basename(path,[ext]) 
- 作用

描述 | 返回值
:--:| :--:
给定一个路径字符串返回其文件名 | 无ext参数:返回文件以及其扩展名 如指定了扩展名则只返回文件名

- 参数

参数 | 描述 | 类型 | 是否可选 
:--: | :--: | :--: | :--:
path | 一段路径 | String| 必须
ext | 可选的文件扩展名|String | 可选

示例：

```js
var p1 = '../start/a.js'
const path = require('path'); 
var basename = path.basename(p1);
console.log(basename) // 未指定扩展名 返回 a.js
var basename1 = path.basename(p1, '.js');
console.log(basename1) // 指定扩展名为.js的文件 返回 a
```
### path.dirname(path)
- 作用

描述 | 返回值
:--:| :--:
给定一个路径字符串返回目录部分 | 路径中的目录部分

-参数

参数 | 描述 | 类型 | 是否可选 
:--: | :--: | :--: | :--:
path | 一段路径 | String| 必须

示例：

```js
var p1 = '../start/a.js'
const path = require('path'); 
console.log(path.dirname(p1)); // 返回../start
```
### path.extname(path)
- 作用

描述 | 返回值
:--:| :--:
给定一个路径字符串返回文件扩展名 | 返回路径中的文件扩展名

- 参数

参数 | 描述 | 类型 | 是否可选 
:--: | :--: | :--: | :--:
path | 一段路径 | String| 必须

示例：

```js
var p1 = '../start/a.js'
const path = require('path'); 
console.log(path.extname(p1)); // 返回 .js
```
### path.parse(path)
- 作用

描述 | 返回值
:--:| :--:
相当与path.basename(）、path.dirname()、path.extname()等的结合 | 解析后的路径对象 

- 参数

参数 | 描述 | 类型 | 是否可选 
:--: | :--: | :--: | :--:
path | 一段路径 | String| 必须

示例：

```js
var p1 = '../start/a.js'
const path = require('path'); 
console.log(path.parse(p1)); 
// 返回对象
 /*
{
     root:"", // 因为不是绝对路径所以没有根目录 
     dir:"../start",  // 目录部分
     base:"a.js", // 文件部分
     ext:".js", // 扩展名
     name:"a" // 文件名
}
*/
```
### path.format(pathobj)
- 作用

描述 | 返回值
:--:| :--:
传入一个path对象返回路径字符串 | 返回解析出的路径

- 参数

参数 | 描述 | 类型 | 是否可选 
:--: | :--: | :--: | :--:
pathobj| 路径对象类似于使用path.parse()解析后的对象 | Object| 必须

示例：
```js
var p1 = '../start/a.js'
const path = require('path'); 
var pathObj1 = path.parse(p1);
console.log(path.format(pathObj1)); // 返回 ../start\a.js
```
### path.relative(from,to)
- 作用

描述 | 返回值
:--:| :--:
传入两个路径 返回这两个路径的相对路径| from - to 的相对路径

- 参数

参数 | 描述 | 类型 | 是否可选 
:--: | :--: | :--: | :--:
from | 起始位置 | Sring| 必须
to | 结束位置 | Sring| 必须

示例：

```js
var p1 = '../start/a.js'
const path = require('path'); 
var pathObj1 = path.parse(p1);
console.log(path.format(pathObj1)); // 返回 ../start\a.js
```
### path.resolve([...path])

- 作用

描述 | 返回值
:--:| :--:
传入路径或路径片段系列  将路径或路径片段的序列解析为绝对路径 | 返回解析后的绝对路径

- 参数

参数 | 描述 | 类型 | 是否可选 
:--: | :--: | :--: | :--:
path| 起始位置 | Sring| 必须 (可以传入多个)

示例：

```js
const path = require('path'); 
console.log(path.resolve("/ab","/cd","ef.js")); // 返回 D:\cd\ef.js
```

## 属性
### path.delimiter
返回当前平台特定的路径定界符
 windows下返回分号 " ; "
 POSIX下返回冒号 " : "
### path.sep
返回平台特定的路径片段分隔符
 windows下返回：" \ "
 POSIX下返回： " / "
