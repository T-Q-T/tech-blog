# 记录一些探讨性问题

## 为什么 i++ 效率比 ++i 低？

```JavaScript
 /*
  * 原因：i++ 需要一个临时变量来存储之前i的值 待返回i的值后 再+1 而 ++i直接返回 i+1即可
*/
// 代码模拟实现 i++ 与++i （由于js原始数据类型不可变的特性所以使用函数无法对原值进行修改 以下代码只是助与理解）
Number.prototype.beforePlus = function() {
    /*
    此次应为
    this = this+1;
    return this;
    */
    return this + 1;
}
Number.prototype.afterPlus = function() {
    /*
    此次应该是返回 temp 后 this += 1
    let temp = this;
    this = this + 1;
    return temp
    */
    let temp = this; // 使用临时变量存储当前值
    temp = temp +1;
    return this;
}
// var num = 10;
// num.beforePlus(); // 11
// num.afterPlus(); // 10
```

## 类型转换问题
参考https://github.com/jawil/blog/issues/5
```JavaScript
 /*
    对象类型隐式类型转换  valueof > toString
    == 运算符的隐式类型转换
    对象(不包括数组)转原始值规则：
    转为数字：
        1. 首先会调用valueof方法 
        2. 若返回一个原始值：则返回 
        3. 若不是原始值 则继续调用toString方法
        4. 若还不是返回一个原始值则报错 ```Uncaught TypeError: Cannot convert object to primitive value```
    转布尔值：
        所有对象转布尔值都为true (null严格来说不属于对象 注： 原理是这样的 不同的对象在底层都表示为二进 在JavaScript中二进制前三位都为0的话会被判断为object类型，null的二进制表示是全0，自然前三位也是0，所以执行typeof时会返回“object” 摘自“你不知道的JavaScript上卷” p103)
    数组转原始值：
    1. 在调用 valueOf 后如未返回原始值 
    2. 继续调用toString方法返回字符串  在Array.prototype原型上的toString方法会判断当前数组长度是否为0 为 0 返回 空字符串 之后空字符串转成数字0
    空数组转原始值为0 需要注意的是数组上使用的toString方法并不是继承自Object.prototype 而是自身的  javascript在Array.prototype里单独加了一个toString方法
    当数组只有一个元素时且该元素不为对象 则把该项转数字 
    例: Number([1]) == > 1
        Number(['1']) == > 1
        Number([{}]) == > NaN
        Number([[[1]]]) == > 1
        Number([1,2]) == > NaN
    */
// 例子1
var obj = {
    v: 0,
    toString: function () {
        console.log('执行toString', this.v);
        return ++this.v;
    }
};
if (obj == 1 && obj == 2 && obj == 3) {
    console.log("hello world");
}

// 例子2
var obj1 = {
    v: 0,
    valueOf: function () {
        console.log('执行valueOf');
        return ++this.v;
    },
    toString: function () {
        console.log('执行toString');
        return --this.v;
    }
};
if (obj1 == 1 && obj1 == 2 && obj1 == 3) {
    console.log("hello world");
}


console.log(obj1 === 1); // 
// 当 严格等于时 ===  valueOf 和 toString 都不会触发 
// 数组 的toString 中其实使用 join方法 




// ===================================
// 对象在 == 运算符下的隐式类型转换规则
const obj = {
    value: 1,
    valueOf: function () {
        console.log('valueOf');
        return this.value;
    },
    toString: function () {
        console.log('toString');
        return this.value;
    }
}
// 与 数字比较
obj == 1
// 会打印出valueOf 而在我们对obj重写的valueOf方法中 返回的是一个原始值 数字 1 所以直接返回了 不会继续执行toString
// 结果为true

// 与 字符串比较
obj == '1'


```