# 单例模式

## 什么是单例模式，实际应用场景？

单例模式（Singleton Pattern）是一种常用的软件设计模式，该模式的主要目标是确保一个类只有一个实例，并提供一个全局访问点来获取这个唯一的实例。

简单理解就是，全局的某个服务，整个项目中共用的，像 Vue Router、Vuex 等 都是典型的单例模式。

## JavaScript 中的单例模式实现

```js
class Singleton {
  constructor() {
    // 判断是否已经存在实例，如果存在则返回已存在的实例
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}
// 这里不管实例化多少次，都是返回同一个实例
const instanceA = new Singleton();
const instanceB = new Singleton();

console.log(instanceA === instanceB); // 输出: true
```

参考 Vue Router 的部分源码也是类似的实现：

```js
export function install (Vue) {
  if (install.installed && _Vue === Vue) return
  install.installed = true

}
```
