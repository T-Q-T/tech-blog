# CLI 工具简单实现

## 初始化项目

` $ npm init -y`

## 安装依赖

`$ npm install commander inquirer download-git-repo ora handlebars figlet clear chalk open watch -D`

依赖说明：

- commander Nodejs 命令配置工具
- inquirer 一组常用的交互式命令行用户界面。
- download-git-repo 下载 github 资料的工具
- ora 一个优雅的终端加载器
- handlebars 一个简单的模板语言
- figlet 在终端中打印好看的自定义提示语的工具
- clear 终端清屏工具，功能等同 linux 命令 clear ，windows 的 cls
- chalk 类似终端的画笔工具，可以给 log 不同颜色样式的提示语
- open 用于自动打开浏览器
- watch 用于监听文件变化

## 在全局使用

在 `package.json`中添加 bin 配置项

配置如下：ym：命令名称 值为入口文件路径

```
 "bin": {
    "ym": "./index.js"
  },
```

在新建的项目下运行命令 `$ npm install -g`

即可在全局中使用`ym`命令

## commander

### version

定义命令程序的版本号 

示例：
```version('0.0.1', '-v, --version')```

参数：

1. 版本号<必传>
2. 自定义标志<可省略>：默认为 -V 和 --version

### option

用于定义命令选项
示例：```option('-n, --name  <name>', 'your name', 'GK')```

1. 自定义标志<必须>：分为长短标识，中间用逗号、竖线或者空格分割；。标志后面可跟参数,可以用<> 或者 []修饰,前者意为必须参数，后者@意为可选参数
2. 选项描述<省略不报错>：在使用 --help 命令时显示标志描述
3. 选项参数默认值，可选。

### command
添加命令

示例：```command('name [arg]', 'description', opts)```