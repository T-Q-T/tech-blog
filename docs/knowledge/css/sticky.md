# CSS sticky
CSS 的 `position: sticky;` 是一种特殊的定位方式，它可以让元素在滚动到一定位置后，像 `position: fixed;` 一样固定在屏幕上，直到它的父元素完全离开视口。
## 使用示例
sticky-element 是一个 sticky 元素，当向下滚动页面时，它会在顶部固定，直到它的父元素完全离开视口。
```html
<div class="container">
  <div class="sticky-element">我是一个 sticky 元素</div>
  <div class="content">我是内容</div>
</div>
```
```css
.container {
  height: 2000px;
}

.sticky-element {
  position: sticky;
  top: 0;
  background-color: lightblue;
}

.content {
  height: 3000px;
}
```
效果如下
```
|-----------------|
| sticky-element  |
|-----------------|
|                 |
|     content     |
|                 |
|                 |
|                 |
|                 |
|-----------------|
```