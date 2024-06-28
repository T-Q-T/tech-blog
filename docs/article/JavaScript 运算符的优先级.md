# js运算符的优先级

研究这个的起因是因为一篇[[从++\[\[\]\]\[+\[\]\]\[+\[\]\]==10?深入浅出弱类型JS的隐式转换]](https://github.com/jawil/blog/issues/5) 的文章涉及到这个知识点 ，就记一下。

先上张图，后面的例子也可以试着看图自己解

<details >
<summary>汇总表</summary>

![](https://i.vgy.me/Q8ZTqq.png)





</details>

## 几道相关的题
### 1. 打印什么？
```js 
var a = 1, b = 2;
var c = a+++b--;
console.log(a,b,c); 
```
<details >
<summary>答案</summary>

### 打印出 2,1,3

 优先级如下：

> "后++/后--" >>> "+" >>> "前++/前--" 

运算规则可以看成是 ==> **(a++)+(b--)**;

由于这里都是后++所以 和c的值无关

</details>

### 2. 打印什么？
```js 
function Foo(){
    return this;
}
Foo.print = function(){
    console.log(3);
}
Foo.prototype.print = function(){
    console.log(1);
}
function print(){
    console.log(2);
}
new Foo.print();
new Foo().print();

```
<details >
<summary>答案</summary>

### 答案是 3 1 

 优先级如下：

> 带参数的new >>> ()函数调用

 带参数的new 意思是 被new运算符执行的构造器后带括号 如不理解可到[MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new)查看详细解释
 
 其实我们有过类似的运用

 如 获取时间戳有多种方法，但是我相信你肯定用过这种方式： ```new Date().getTime()```


 先来看下直接执行 Date() 和new Date()  有什么区别


![date](https://user-images.githubusercontent.com/41280500/86308698-80a42980-bc4c-11ea-9443-5366db65e784.png)


 看上去结果是一样的 实际上 new Date返回的是一个对象而 Date()返回的只是一个字符串
 
![datetype](https://user-images.githubusercontent.com/41280500/86308646-6ec28680-bc4c-11ea-8e26-c7d1f421117c.png)


 到这就明显能判断出 `new Date().getTime()` 的执行顺序一定是 先 执行 `new Date()` 后在执行`.getTime()`

该题原题来自[一道颇有难度的JavaScript题](https://segmentfault.com/a/1190000007979730)
</details>

### 3. 控制台执行`2*2**4` 的结果是多少？
- 256   
- 32 
<details open>
<summary>答案</summary>

### 答案是 32 

 因为幂运算法 `**` 比 `*` 优先级高

 其实仔细想一想就会觉得这是必然的设计

 假设 `*` 比 `**` 优先级高会出现什么情况 `2 ** 4` 该怎么运算？ 答案是会出错运行不了

</details>

### 4. 打印什么？
```js
function a(arg){
    console.log('a');
    return arg;
}
function b(arg){
    console.log('b');
    return arg;
}
function c(arg){
    console.log('c');
    return arg;

}
var d = a() || b() && c();
var e = a() || b(2) && c(3);
var f = a(1) || b(2) && c(3);
console.log(d,e,f)
```
<details >
<summary>答案</summary>

### 依次是 a b a b c a undefined 3 1

> 优先级是 && 大于 || 

所以上面的执行可以转换为：a() || (b() && c())  然后从左到右执行，后面两个相同

</details>


## 参考资料

[MDN运算符优先级](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

[都2020了，还不懂js运算符优先级？](https://juejin.im/post/5e1eecf75188254dc022beea)
