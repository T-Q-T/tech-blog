# 策略模式

## 什么是策略模式，实际应用场景？

策略模式(Strategy Pattern)是一种行为设计模式，它能让你定义一系列算法，并将每一个算法分别放入独立的类中，使得它们可以相互替换。
使用策略模式可以避免使用大量的 if-else 语句，它的核心思想是定义了算法族，分别封装起来，可以让它们之间可以互相替换。

## JavaScript 中的策略模式实现

实现之前先指一个实际开发中可能会遇到的真实例子：

有一天，产品经理韩梅梅找到李雷，给李雷提了这么个需求：
马上大促要来了，我们本次大促要做差异化询价。啥是差异化询价？就是说同一个商品，我通过在后台给它设置不同的价格类型，可以让它展示不同的价格。具体的逻辑如下：

- 当价格类型为“预售价”时，满 100 - 20，不满 100 打 9 折
- 当价格类型为“大促价”时，满 100 - 30，不满 100 打 8 折
- 当价格类型为“返场价”时，满 200 - 50，不叠加
- 当价格类型为“尝鲜价”时，直接打 5 折

李雷扫了一眼 prd，立刻来了主意。他首先将四种价格做了标签化：

> 预售价 - pre
>
> 大促价 - onSale
>
> 返场价 - back
>
> 尝鲜价 - fresh

第一版实现代码如下：

```js
// 询价方法，接受价格标签和原价为入参
function askPrice(tag, originPrice) {
  // 处理预热价
  if (tag === "pre") {
    if (originPrice >= 100) {
      return originPrice - 20;
    }
    return originPrice * 0.9;
  }

  // 处理大促价
  if (tag === "onSale") {
    if (originPrice >= 100) {
      return originPrice - 30;
    }
    return originPrice * 0.8;
  }

  // 处理返场价
  if (tag === "back") {
    if (originPrice >= 200) {
      return originPrice - 50;
    }
    return originPrice;
  }

  // 处理尝鲜价
  if (tag === "fresh") {
    return originPrice * 0.5;
  }
}
```

这段代码中使用 四个 if 语句，看起来很丑陋，而且一旦价格类型增多，代码就会越来越臃肿。
这时，李雷决定使用策略模式重构代码。
首先提取出不同价格类型的处理逻辑，封装成函数：

```js
// 处理预热价
function prePrice(originPrice) {
  if (originPrice >= 100) {
    return originPrice - 20;
  }
  return originPrice * 0.9;
}

// 处理大促价
function onSalePrice(originPrice) {
  if (originPrice >= 100) {
    return originPrice - 30;
  }
  return originPrice * 0.8;
}

// 处理返场价
function backPrice(originPrice) {
  if (originPrice >= 200) {
    return originPrice - 50;
  }
  return originPrice;
}

// 处理尝鲜价
function freshPrice(originPrice) {
  return originPrice * 0.5;
}
```
第二步，将不同价格类型的处理函数封装成对象：
```js
// 定义一个对象，存储不同价格类型的处理函数
const priceProcessor = {
  pre: prePrice,
  onSale: onSalePrice,
  back: backPrice,
  fresh: freshPrice,
};
```
第三步，将询价方法中的 if 语句替换成对象属性访问：
```js
function askPrice(tag, originPrice) {
  return priceProcessor[tag](originPrice);
}
```


至此完整版代码如下：
```js
// 处理预热价
function prePrice(originPrice) {
  if (originPrice >= 100) {
    return originPrice - 20;
  }
  return originPrice * 0.9;
}

// 处理大促价
function onSalePrice(originPrice) {
  if (originPrice >= 100) {
    return originPrice - 30;
  }
  return originPrice * 0.8;
}

// 处理返场价
function backPrice(originPrice) {
  if (originPrice >= 200) {
    return originPrice - 50;
  }
  return originPrice;
}

// 处理尝鲜价
function freshPrice(originPrice) {
  return originPrice * 0.5;
}
// 定义一个对象，存储不同价格类型的处理函数
const priceProcessor = {
  pre: prePrice,
  onSale: onSalePrice,
  back: backPrice,
  fresh: freshPrice,
};

function askPrice(tag, originPrice) {
  return priceProcessor[tag](originPrice);
}
```