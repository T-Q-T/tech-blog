# 选择排序

选择排序是一种简单直观的排序算法。它的工作原理是首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。

# 图解

![选择排序](/public/img/algorithm/选择排序.gif)

# 代码实现

```js
/*
    选择排序  时间：O(n²)  空间: O(1)
    思路： 每次遍历时，找到当前范围内的最小值，将其放到当前范围的头部
    1. 每一次遍历时  让第i为分别与后面每一位比较 小于i位的则交换位置 每一次把最小值放到i位
    2. 每次遍历找出最小值最后再与i位交换
*/
function selectSort(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    let minIndex = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {     // 寻找最小的数
        minIndex = j;                   // 将最小数的索引保存
      }
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}