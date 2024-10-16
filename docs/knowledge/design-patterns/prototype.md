# 原型模式

## 什么是原型模式，实际应用场景？

原型模式是一种编程范式，意在以某对象为原型快速创建新对象，通俗点讲就是创建一个共享的原型，并通过拷贝这些原型创建新的对象。
在 javaScript 中，因为有着原型链及访问属性不存在就会顺着原型链往上查询的特性，此特性很适合作原型模式。

## JavaScript 中的原型模式实现

比较典型的就是 Object.create ,以下是一个简易版实现。

```
function myCreate(proto) {
    let newObj={}
    newObj.__proto__=proto
    return newObj
}
let a={t:1,g:2}
let b=myCreate(a)
console.log(b.t,b.g)
// 1,2
```

注意，因为是绑定原型式的创建对象，若原始对象具有引用类型数据，那么修改新创建的对象也会影响原始对象

```
let a={t:test{1},f:2}
let b=Object.create(a)
b.t.test=1234
b.f=5

console.log(a.t.test,a.f)
// 1234 2

```