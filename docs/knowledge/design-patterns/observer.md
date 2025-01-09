# 观察者模式

## 什么是观察者模式，实际应用场景？

观察者模式（Observer Pattern）是一种设计模式，它定义了对象之间的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都会得到通知并被自动更新。

应用场景如：

1. MVC 或 MVVM 架构：模型（Model）是可观察者，视图（View）是观察者，模型数据的改变会自动更新到视图上。

2. 事件驱动的系统：DOM 事件监听就是观察者模式的一种实现，DOM 元素是可观察者，事件监听器是观察者，当 DOM 元素的状态发生改变时，会触发相应的事件。

3. Promise 和 RxJS：Promise 的 `.then()` 方法或者 RxJS 的 Observable 对象都是观察者模式的实现。

## JavaScript 中的观察者模式实现

```js
class Observable {
  constructor() {
    this.observers = [];
  }

  subscribe(f) {
    this.observers.push(f);
  }

  unsubscribe(f) {
    this.observers = this.observers.filter((subscriber) => subscriber !== f);
  }

  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

class Observer {
  constructor(behavior) {
    this.behavior = behavior;
  }

  update(data) {
    this.behavior(data);
  }
}

// 使用示例
// 创建一个可观察对象
const observable = new Observable();

// 创建两个观察者
const observer1 = new Observer((data) => console.log(`Observer 1: ${data}`));
const observer2 = new Observer((data) => console.log(`Observer 2: ${data}`));

observable.subscribe(observer1.update.bind(observer1));
observable.subscribe(observer2.update.bind(observer2));

observable.notify("Hello!");
// Observer 1: Hello!
// Observer 2: Hello!

observable.unsubscribe(observer1.update.bind(observer1));

observable.notify("Hello, again!");
// Observer 2: Hello, again!
```
