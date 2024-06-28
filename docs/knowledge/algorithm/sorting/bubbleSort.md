# 冒泡排序

冒泡排序是一种简单的排序算法。它重复地遍历要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。遍历数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。

# 图解

![冒泡排序](/public/img/algorithm/冒泡排序.gif)

# 代码实现

```js
/*
    冒泡排序  时间：O(n²)  空间: O(1)
    思路：
    每一次遍历时 让相邻的两个元素比较 前一个大于后一个则交换位置 这样每一次遍历多能找出最大值并放到最后
*/
function bubbleSort(arr) {
  for (let i = 0, len = arr.length; i < len; ++i) {
    for (let j = 0; j < len - i; ++j) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```
