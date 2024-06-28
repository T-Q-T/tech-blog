# HTML <meta>

写这个是因为，最近在以前的一个项目中看到meta标签的`http-equiv="refresh"`属性，居然没见过，有点尴尬所以到MDN仔细的看了一遍并记录下
## 属性
### content

结合 http-equiv 或name 属性使用 表示内容

``` <meta name="author" content="wisen"```

### charset

指定该文档的字符编码 


**example:** 

``` <meta charset="utf-8>"```

可选值:

参考 [IANA 字符集](http://www.iana.org/assignments/character-sets/character-sets.xhtml)

### name
使用 name 属性来定义一个 HTML 文档的描述、关键词、作者等
使用方法 配合**content**属性使用

可选值：
|值|描述|例子|
|---|---|---|
|application-name|表示Web 应用程序的名称|```<meta name="application-name" content="app">```
|author|作者|``` <meta name="author" content="wisen">```|
|description|规规定页面的描述|``` <meta name="description" content="This is a game">```
|generator|生成页面的软件的标识符|```<meta name="generator" content="FrontPage 4.0">```
|keywords|页面的关键字| ```<meta name="keywords" content="game">```
|viewport|视口 仅供移动设备使用| ```<meta name="viewport" content="width=device-width, initial-scale=1.0">```

### http-equiv
http-equiv属性定义了一个编译指示指令,这个属性叫做 http-equiv(alent) 是因为所有允许的值都是特定HTTP头部的名称

可选值：

|值|描述|例子|
|---|---|---|
|content-type|规定文档的字符编码|```<meta http-equiv="content-type" content="text/html">```
|default-style|默认CSS样式表名称|```<meta http-equiv="default-style" content="css name">```|
|x-ua-compatible|浏览器的默认渲染方式|```<meta http-equiv="X-UA-Compatible" content="ie=edge">```
|refresh|页面自动刷新的时间间隔|```<meta http-equiv="refresh" content="30">```


### scheme （HTML5已废弃）
scheme 属性规定用于翻译 content 属性的值的方案（格式或 URI）。 

可选值：
|值|描述|例子|
|---|---|---|
|format/URI	|定义 content 属性内的值的格式（或指向一个包含信息的 URI）|```<meta name="date" content="2009-01-02" scheme="YYYY-MM-DD">```

## 参考
[HTML<meta>标签](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta)