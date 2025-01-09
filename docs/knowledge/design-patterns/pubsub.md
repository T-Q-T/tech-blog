# 发布订阅模式

## 什么是发布订阅模式，实际应用场景？

类似于观察者模式，但是发布-订阅模式中的发布者和订阅者之间没有直接依赖关系。发布者将消息发布到一个主题（topic），而订阅者可以选择订阅感兴趣的主题。

应用场景：

- 页面上的事件监听和处理。
- 消息传递和通信。
- 解耦和组件间的松散耦合

## JavaScript 中的发布订阅模式实现

```js
class EventBus {
  eventMap = new Map();
  /**
   * 监听事件
   * @param {string} eventName 自定义事件名称
   * @param {function} cb  回调
   */
  on(eventName, cb) {
    if (this.eventMap.has(eventName)) {
      this.eventMap.set([eventName, ...this.eventMap.get(eventName), cb]);
      return;
    }
    this.eventMap.set(eventName, [cb]);
  }

  /**
   * 触发事件
   * @param {string} eventName  eventName 自定义事件名称
   * @param {*} data 需要传递的数据
   */
  emit(eventName, data) {
    if (this.eventMap.has(eventName)) {
      const cbList = this.eventMap.get(eventName);
      cbList.forEach((fn) => fn(data));
    }
  }

  /**
   * 取消事件监听
   * @param {string} eventName 自定义事件名称
   * @param {function} cb  回调
   */
  off(eventName, cb) {
    if (!this.eventMap.has(eventName)) return;
    if (cb) {
      const cbList = this.eventMap.get(eventName);
      this.eventMap.set(
        eventName,
        cbList.filter((fn) => fn !== cb)
      );
    } else {
      this.eventMap.delete(eventName);
    }
  }
}
```
