# 记录一些容易忘的概率性知识 方便回顾
## VUE的渐进式框架理解 [参考](https://www.zhihu.com/question/51907207)
渐进式可以代表的含义：主张最少
> 我在做Vue的过程中也在不停地思考它的定位，现在，我觉得它与其他框架的区别就是渐进式的想法，也就是“Progressive”——这个词在英文中定义是渐进，一步一步，不是说你必须一竿子把所有的东西都用上。

以上内容来自 Vue作者尤雨溪：Vue 2.0，渐进式前端解决方案

vue中可以只使用一部分功能  而不像react与angular

- 如果使用angular
    - 必须使用它的模块机制
    - 必须使用它的依赖注入
    - 必须使用它的特殊形式定义组件（这一点每个视图框架都有，难以避免）

- 如果使用react

    - 它的主张主要是函数式编程的理念，比如说，你需要知道什么是副作用，什么是纯函数，如何隔离副作用。它的侵入性看似没有Angular那么强，主要因为它是软性侵入。



## MVC、MVP、MVVM理解   
参考链接：

- [概念理解](http://www.ruanyifeng.com/blog/2015/02/mvcmvp_mvvm.html)
- [实例代码](https://www.cnblogs.com/zhouyangla/p/6936455.html) 
### MVC
- 模型（Model）：数据保存
- 视图（View）：用户界面。
- 控制器（Controller）：业务逻辑

所有通信都是单向的。
例子：
- 在view中用户修改了一个输入框或chekbox等控件 
- 通知Controller控制器
- 再由Controller调用Model的对应更新数据方法更新数据
- 之后通知View调用render函数来更新视图
### MVP
- 模型（Model）：数据保存
- 视图（View）：用户界面。
- 控制器（Presenter）：业务逻辑

在MVC的基础上修改后 Model与View不通信 且Modle与Presenter View与Presenter之间的通信都是双向的
### MVVM
- 模型（Model）：数据保存
- 视图（View）：用户界面。
- 控制器（ViewModle）：业务逻辑

MVVM 模式将 Presenter 改名为 ViewModel，基本上与 MVP 模式完全一致。

唯一的区别是，它采用双向绑定（data-binding）：View的变动，自动反映在 ViewModel，反之亦然。Angular 和 Ember 都采用这种模式。