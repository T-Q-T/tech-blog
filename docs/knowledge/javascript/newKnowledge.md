# JavaScript 新知识

<br>

# [Web Container](https://webcontainers.io/guides/quickstart)

[stackblitz 在线演示](https://stackblitz.com/~/github.com/T-Q-T/stackblitz-webcontainer-api-starter-kjnquf?file=main.js) <br>

[github 地址](https://github.com/T-Q-T/stackblitz-webcontainer-api-starter-kjnquf)<br>

**基本理解**<br>

Web Container 主要作用是让浏览器具备运行 Node 代码的能力，可以直接在浏览器上使用各种 node 的 npm 包，甚至使用
fs，http.create 等 API。
但与之相对的，它的使用也具备一定的局限性。<br>

**优点**<br>

**可以在浏览器环境运行 node 脚本,使用 npm 包更广泛。**<br>
**因为是真正在浏览器底层运行的，故其安装的所有依赖均能离线工作，只要初始化时加载好依赖，中途断网也能够继续使用**

**受限点** <br>

1.fs 系列操作无法进行真正的文件操作，所有的一切均基于虚拟内存，会随着 web-container 创建/销毁，因此无法做到持久化，且每次启动均需 install 依赖。<br>

2.http 系列操作仍会受到浏览器的跨域限制,所以在调用 API 方面是无法做到类似插件/服务器那样跨域调用，仅能启动一些本地服务（也是运行在内存之中，无法通过本地域名端口号访问）。 <br>

3.由于是动态初始化依赖，故不能安装太多的依赖，否则会影响启动性能。

**基本 API**

**挂载基本实例**

```
import { WebContainer } from '@webcontainer/api';
const webcontainerInstance = await WebContainer.boot()
```
<br>

**配置 package.json**

```
await webcontainerInstance.mount(files);
<!-- 
files 是一个对象，内容为需要载入的 package.json 清单，
配置挂在后 webcontainerInstance 进行所有的 node 操作均遵循此清单依赖
 -->
```
<br>

**运行命令行**

```
const installProcess = await webcontainerInstance.spawn("npm", ["install"]);
```
<br>

**预览服务器内容**

```
webcontainerInstance.on('server-ready', (port, url) => ());
<!-- 返回的 url 即为服务器接口根路径返回的内容 -->
```
<br>


**文件系统**

```
 webcontainerInstance.fs.xxx
 <!-- 与 node 一致，需加 webcontainerInstance 前缀 -->
```
<br>