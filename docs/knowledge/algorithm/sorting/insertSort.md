# 插入排序

插入排序是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

# 图解

![插入排序](/public/img/algorithm/插入排序.gif)

# 代码实现

```js
/*
    插入排序  时间：O(n²)  空间: O(1)
    思路：
    每次遍历时，将当前元素插入到已排序数组的适当位置
*/
function insertSort(arr) {
  for (let i = 0, len = arr.length; i < len; ++i) {
    let cur = arr[i]; // 保存当前值
    let j = i; // 保存上一次大于自身的索引位
    for (; j > 0 && cur < arr[j - 1]; --j) {
      arr[j] = arr[j - 1]; // 往后挪一位
    }
    arr[j] = cur; // 最后插入
  }
  return arr;
}
```
