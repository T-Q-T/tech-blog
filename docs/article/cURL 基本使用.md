# cURL
cURL是一个利用URL语法在命令行下工作的文件传输工具,习惯称cURL为下载工具

## 下载安装

1. 下载地址：[官网地址](https://curl.haxx.se/download.html)
2. 解压后配置bin目录到环境变量
3. 运行 ``` curl-help``` 命令验证是否安装成功
## 基本用法
### 发送GET请求

```$ curl www.baidu.com [!option]``` 

### 发送POST请求

```$ curl -X post www.baidu.com [!option]``` 

### 参数
- **-i** 显示http response（响应头）和网页代码
- **-I** 只显示http response（响应头）
- **-v** 显示详细内容（包括请求头，响应头等）
- **--trace [filepath]** 以文件形式保存详细信息
- **-X** 表示以什么方式请求
- **-d** 发送post请求时所携带的data数据

### 示例
``` $ curl www.baidu.com -i``` 

GET请求www.baidu.com网站并显示响应头和网页代码

``` $ curl www.baidu.com -I``` 

GET请求www.baidu.com网站只显示响应头

``` $ curl www.baidu.com -v``` 

GET请求www.baidu.com网站显示详细信息

``` $ curl www.baidu.com --trace D:\\baidu_info.txt```  

GET请求www.baidu.com网站把内容保存到baidu_info.txt

``` $ curl -X POST -d 'content' www.baidu.com```  

post请求www.baidu.com网站并携带数据'content' 

## 参考文献

[【阮一峰】curl 的用法指南](http://www.ruanyifeng.com/blog/2019/09/curl-reference.html)

[【阮一峰】curl网站开发指南](http://www.ruanyifeng.com/blog/2011/09/curl.html)

[windows下使用curl命令 && 常用curl命令](https://www.cnblogs.com/zhuzhenwei918/p/6781314.html)