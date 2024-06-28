# CSS 新知识

- [filter](https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter)
  滤镜

  filter:grayScale(100%) /_ 灰色 _/

- [grid](http://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)
  grid 网格布局
  ```
    /* 容器属性 */
    display:grid;
    grid-template-columns:50% 50%;  /* 设置列数与相应宽度 */
    grid-template-rows:50% 50%;  /* 设置行数与相应高度 */
    grid-template-columns：repeat(3,33.33%) /* 3列 且宽度都是33.33% */
    justify-items：[start|end|center|stretch]; /* 水平对齐方式  stretch为拉伸 */
    align-items：start|end|center|stretch]; /* 垂直对齐方式  stretch为拉伸 */
    place-items:[align-items,justify-items] /* 简写 */
    ......
    /* 项目属性 */
    grid-column-start：开始网格;
    grid-column-end: 结束网格;
    grid-row-start:开始网格;
    grid-row-end:结束网格;
    justify-self:[start|end|center|stretch]; /* 水平对齐方式  stretch为拉伸 */，
    align-self:[start|end|center|stretch]; /* 水平对齐方式  stretch为拉伸 */，
    place-self:[align-items,justify-items] /* 简写 */
  ```
- [position:stick 粘性定位](https://www.zhangxinxu.com/wordpress/2018/12/css-position-sticky/)

  是 position:relative 和 position:fixed 的结合体 当元素在屏幕内，表现为 relative，就要滚出显示器屏幕的时候，表现为 fixed

- [user-select](https://developer.mozilla.org/zh-CN/docs/Web/CSS/user-select)

  是否允许选择文本

- [width](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width)
  属性：
    - max-content：为子元素的最大宽度
    - min-content：元素内容固有的最小宽度。
    - fix-content: 取以下两种值中的较大值:
      1. 固有的最小宽度
      2. 固有首选宽度（max-content）和可用宽度（available）两者中的较小值