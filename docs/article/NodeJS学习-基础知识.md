#  node.js简介
概要：nodejs是一个基于Google V8引擎开发的一个javascript运行环境
特性：事件驱动 非阻塞 IO

## nodejs命令行的 REPL模式 (交互式解释器)
- 进入方式：在命令行输入node回车即可进入
- REPL指的是这四个主要功能
R => read : 用来读取用户输入的javascript逻辑 并储存到内存中
E => eval : 执行输入的javascript语句
P => print : 打印执行的结果
L => loop : 循环操作前三个步骤直到退出REPL模式
## 运行js文件
  直接在命令行通过 node命令 + 文件名的方式来执行js文件
  可以省略文件后缀名 因为nodejs就是用来运行js文件的
## nodejs的模块
理解：每一个js文件就是一个模块 
使用：通过require来引入模块 exports或者module导出模块
模块化规范:
  - commonJS (nodejs所使用的规范 require/export）
        定义：一个单独的js文件就是一个模块，加载模块需要使用require方法、而加载过来的是改模块中使用exports所导出的对象
       特性：commonJs加载模块是同步的所以只有模块记载完毕后才会去执行、而想nodejs这种做服务的的加载模块都是从本地硬盘去加载所以相对较快不同考虑异步问题 但如果是web端的话加载模块都要到服务器加载比较慢不可能等所有模块加载完后再执行。

- AMD (异步模块 requireJs所使用的规范)
  定义：AMD是通过difine方法定义模块通过require方法加载模块 AMD加载模块是通过回调函数来加载所有模块 把每个模块它所依赖的模块都传到参数中后再加载  也就是在解析和执行当前模块之前，必须指明当前模块所依赖的模块
使用方式：在html中使用requireJs加载: 
```
<script data-main="main" src="require.js"></script> 
```   
我们需要使用 data-main来指定一个主模块来作为加载模块的入口文件 
- CMD （通用模块 懒加载 Common Module Definition）
定义：与CommonJS Modules/1.1 和 Node Modules 规范类似 也是一个文件为一个模块 CMD相对比较简单清晰 就是在你什么时候要使用就通过define(factory)加载 factory是一个函数 里面会默认传入3个参数 require exports module 可以使用require在来加载模块

- CMD与AMD区别：
1. 对于其各自所依赖的模块AMD是先加载的而CMD是延迟加载（懒加载）
2. CMD 推崇依赖就近，AMD 推崇依赖前置。
  AMD也支持CMD的写法同时也可以把require当做依赖项传递 

 例：
```
// AMD
define(['./a,' .'/b'], function(a ,b) { // 依赖已经明确写好
  ..........
})

// CMD
define(function(require, exports, module) {
 var a = require('./a'); // 随时加载
 var b = require('./b');
})
```


 ### nodejs运行js文件的过程分析 （个人理解）
**问题1：在web端js中为什么没有require、exports等变量而nodejs中可以使用这些变量呢？**
其实每一个js文件都运行在一个函数里 我们可以打印出这个函数看看长啥样。
  创建一个js文件其内容如下：
  ```
console.log(arguments.callee.toString());
```
在命令行运行该文件 
返回以下内容：
```
function (exports, require, module, __filename, __dirname) { console.log(arguments.callee.toString());}
```
可以看到这个函数里有五个参数：
>  1 export          就是我们用来导出的变量
  2 require        用来引入模块的函数
  3 module        模块对象
  4 __filename 当前文件路径 包含自身文件名 
  5 __dirname 当前文件绝对路径

这样可以使我们的每个模块之间的变量相互独立互不影响

**问题2：require和exports又是怎么实现导入导出模块的呢？**
    首先一个js文件的执行必然只有两种情况
- 其为主模块 通过命令行直接运行 
- 该文件被当做模块引入使用
  而主模块文件的运行不会有导出的情况

导入导出过程分析：
1.执行js文件前先在外部定义一个module对象大致内容如下：
```
var module = {
  exports:{}
  filename:""
  ......
}
```
2.把文件内容放到一个如上面的函数里执行并传入module、 module.export、require、filename、dirname五个参数；
> 这样我们在使用module.exports或者exports导出变量的时候 
因为module是引用值 所以就是在修改外部定义好的module对象的exports属性 

例:在module.js文件导出内容如下：
```
exports.a = 10;
```
这时的module 对象：
```
module = {
 exports:{
    a: 10
  }
}
```


而我们在使用require导入的时候就是用以上步骤执行这个js文件后把module.exports的值返回
例:在module1.js中内容如下：
```
 const a = require("./module.js"); // 返回 {a:10}
```
**接下来重复上面的步骤**：
1.外部定义一个module对象
2.把文件内容放到一个function (exports, require, module, __filename, __dirname) {}函数里执行
3.最后把module.exports对象返回 所以我们只需要在引入的时候定义一个变量接收即可
**个人理解的node模块运行过程大概就这样的吧!**

**问题3:nodejs中引入自定义模块（自己编写的js文件）需要在路径前加上  "./ "  是什么原因?**
首先我们想想为什么引入其他内置模块或第三方模块为啥不需要加  "./ "
其实通常我们在页面引入文件时的默认路径就是当前路径
不过在nodejs中它的默认路径为node_modules文件夹 所以引入自定义模块时我们需要通过加 "./ "来把路径指回当前路径
而引入其他模块就会默认从node_modules文件夹中查找

**问题4：使用require引入同一个模块多次怎么样？**
首先我们先来看个例子：
```
// a.js中
var a = 10;
console.log(a++);
module.exports = a;

// b.js中
var a1 = require("./a");
var a2 = require("./a");
var a3 = require("./a");
console.log(a1);
console.log(a2);
console.log(a3);
```
- 在这个例子中我们在命令行运行b.js后 大家可以想想会打印出什么呢？
要知道这个例子的答案我们需要知道一个nodejs加载模块的缓存机制：
> 其实nodejs在加载我们使用require方法指定的文件时会先去我们内存里找 看是否已有对应得结果
如果有则直接返回所查询到的结果 并不会执行文件
如果没有 会执行一次该文件后把它返回的exports存在内存里再把结果返回给我们加载的地方，这样之后如果在有加载同样的文件情况下就会直接从缓存里读取不会多次执行同个文件   
[这段看着比较懵 原本想画个图的但是试着画了下感觉惨不忍睹就放弃了，还是用文字表达吧。。] 

上面这个例子执行过程：
1. 在b.js中第一行 var a1 = require("./a");  在执行a.js文件之前会到内存里去找看是否已有a.js的执行结果 发现没有才会执行该文件，而再a.js执行完后返回 11 node在拿到这个结果后会存在内存中再把结果返回给 定义的变量a1
2. b.js 第二行 执行前同样会去内存找但是这次内存已有结果所以会直接返回 11 
3. 与第二回相同 拿到的依然是内存里已有的值 11

所以上面例子执行结果为：
10 11 11 11
#### NPM（全称 Node Package Manager 是基于nodejs的一个包管理器）
作用：可通过npml来安装第三方模块
常用命令：
 ```
$ npm install 《模块名》        // 安装指定模块
$ npm install 《模块名》-g     // 安装指定模块到全局的node_modules目录 
$ npm install 《模块名》--save // 将安装的模块写入到package.json配置信息描述文件中
$ npm install                // 根据package.json文件来安装所依赖的模块
$ npm update                 // 更新模块
$ npm uninstall 《模块名》    // 卸载指定模块
$ npm version                // 查看模块版本
$ npm view                   // 查看模块的注册信息
$ npm ls                     // 查看安装的模块
```
#### 使用CNPM (淘宝NPM镜像）
因为使用npm安装模块需要从npm官网上到github上下载 服务器在国外所以比较慢
 后来淘宝自己做了一个npm的镜像供开发者使用 因为使用的是国内服务器所以下载速度比npm快很多 该镜像每10分钟同步一次 所以绝大多数资源都相同的
使用方式也和npm一样只是使用的时候用cnpm代替npm 

#### package.json (配置信息描述文件)
用来描述和配置项目的一个json格式的文件
通过命令行创建:
```
$ npm init 
```
输入后会出现配置信息需要确认和填写：
```
package name :     // 模块的名称 默认为所在的文件夹目录名称
version：(1.0.0)   // 版本号 默认 1.0.0
description:       // 模块的描述信息 默认为空
entry point:       //  入口文件 默认index.js
test command:      // 可执行命令
git repository:    // git仓库
keywords:          // 关键字
author:            // 作者
license:           // 开源协议 默认ISC
```
如果觉得麻烦可以使用下面命令全部使用默认值
```
$ npm init -y
```
除了上面的一些配置信息外还有些比较重要的：
- dependencies: 依赖的模块
- devDependencies : 开发时所依赖的模块

**package-look.json文件的作用：**
  package-lock.json用来文件锁定所有模块的版本号，包括主模块和所有依赖子模块，当使用npm install 安装模块时 会根据package.json的中的依赖模块信息安装对应模块 再从package-lock.json中获取版本信息来安装。
有了package-lock.json后通过npm install 安装的模块不会自动更新package.json文件中的模块 可以使用npm install packagename（自动更新小版本号）或者npm install packagename@x.x.x（指定版本号） 来进行安装才会更新。package-lock.json文件中的版本号也会随着更新。
> 当package.json与package-lock.json都不存在，执行 npm install 时，node会重新生成package-lock.json文件，然后把node_modules中的模块信息全部记入package-lock.json文件，但不会生成package.json文件,可以通过 npm init -y 来生成package.json文件
### nodejs的作用域
  在nodejs中因为其每一个模块都运行在一个函数中的特效 所以每个模块中定义的变量都为其的内部变量
  而如果我们需要使用其他模块中的变量可以有两种方式：
 1. 使用module.exports导出后再通过require 引入
 2. 在nodejs中因为其宿主环境不是浏览器端所以没有window对象但是nodejs提供了一个global对象该对象在全局中都可使用所以我们也可以把需要使用的变量挂到global全局对象上供其他模块使用（但这种方式尽量少用）

### 最后
内容较多写的挺乱的 不易阅读望海涵
我也是初学nodejs 有不对的地方望指出~~~^_^~~~ 