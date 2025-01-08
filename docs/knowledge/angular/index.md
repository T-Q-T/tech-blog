# Angular 双绑实现原理

## 借助 Zone.js 

Zone.js 具有拦截异步任务都功能，它篡改（Monkey Patch）了常见的异步操作，例如：<br>
setTimeout / setInterval <br>
Promise.then  <br>
DOM 事件（addEventListener） <br>
AJAX 请求（XMLHttpRequest） <br>

当出现以上操作时，均会触发 Zone.js 的回调函数，进而触发 Angular 的变更检测完成 MVVM 的工作流程（比如接口请求被捕获到了，Angular 便将这些数据通过 document 的操作修改预先设置的模版，或者用户修改了输入框内容，同样触发回调修改数据源，从而完成 MVVM）



# Angular 组件实现原理

主要经历以下几点 
模板编译:通过 AOT 编译器将模板转换为 JavaScript 渲染函数。<br>
依赖注入:通过 DI 系统管理组件的依赖关系。<br>
变更检测:通过 Zone.js 捕获事件并触发脏检查，更新视图<br>
DOM 渲染:从虚拟 DOM 转换为实际 DOM，并插入页面。<br>





