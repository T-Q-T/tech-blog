# 快速排序

快速排序是一种高效的排序算法，由英国计算机科学家霍尔在 1960 年提出。它的基本思想是：通过一趟排序将待排记录分割成独立的两部分，其中一部分记录的关键字均比另一部分的关键字小，则可分别对这两部分记录继续进行排序，以达到整个序列有序。

## 图解：
![快速排序](/public/img/algorithm/快速排序.jpg)
## 阮一峰版本

```js
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  var mediant = arr.splice(Math.floor(arr.length / 2), 1)[0];
  // 分成两组
  var left = [];
  var right = [];
  arr.forEach((item) => {
    if (mediant > item) {
      left.push(item);
    } else {
      right.push(item);
    }
  });
  return quickSort(left).concat([mediant], quickSort(right));
}
```

简单优化 取基准值改为使用 arr 第一个元素

```js
function quickSort(arr) {
  var len = arr.length;
  if (len < 2) {
    return arr;
  }
  var pivot = arr[0];
  var left = [];
  var right = [];
  for (let i = 1; i < len; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}
```

## 递归版实现

```js
const quicksort = function (arr) {
  // 分区操作
  function partition(arr, left, right) {
    let storeIndex = left,
      pivot = arr[right]; // 取最右侧的元素作为基准值
    for (let i = left; i < right; i++) {
      // 将小于基准值的元素交换到左侧
      if (arr[i] < pivot) {
        [arr[i], arr[storeIndex]] = [arr[storeIndex], arr[i]];
        storeIndex++;
      }
    }
    // 将基准值交换到正确的位置
    [arr[right], arr[storeIndex]] = [arr[storeIndex], arr[right]];
    return storeIndex; // 返回基准值的位置
  }
  // 快速排序
  function sort(arr, left, right) {
    if (left >= right) {
      return;
    }
    let storeIndex = partition(arr, left, right);
    sort(arr, left, storeIndex - 1); // 对左侧子数组进行排序
    sort(arr, storeIndex + 1, right); // 对右侧子数组进行排序
  }
  sort(arr, 0, arr.length - 1);
  return arr;
};
```

## 迭代版实现

```js
const quickSort = function (arr) {
  let stack = [[0, arr.length - 1]]; // 初始化栈，存储待排序的子数组的左右边界
  while (stack.length) {
    let [left, right] = stack.pop(); // 弹出待排序的子数组的左右边界
    if (left >= right) {
      continue;
    }
    let pivot = arr[right], // 取最右侧的元素作为基准值
      partitionIndex = left;
    for (let i = left; i < right; i++) {
      // 将小于基准值的元素交换到左侧
      if (arr[i] < pivot) {
        swap(arr, i, partitionIndex);
        partitionIndex++;
      }
    }
    // 将基准值交换到正确的位置
    swap(arr, right, partitionIndex);
    stack.push([left, partitionIndex - 1]); // 将左侧子数组的左右边界入栈
    stack.push([partitionIndex + 1, right]); // 将右侧子数组的左右边界入栈
  }
  // 交换数组中的两个元素
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};
```

经过测试迭代版本的性能比递归版本差, 大概原因为：

- 栈的使用：在迭代版本中，我们使用了一个栈来存储待排序的子数组的左右边界。每次迭代，我们都需要从栈中弹出一个子数组进行处理，这会增加额外的时间和空间开销。

- 子数组的处理顺序：在迭代版本中，我们总是先处理左侧的子数组，然后再处理右侧的子数组。如果原始数组已经接近有序，这种处理顺序可能会导致栈的深度过大，从而影响性能。

- 基准值的选择：在这个实现中，我们总是选择最右侧的元素作为基准值。如果原始数组已经接近有序或者完全逆序，这种选择方式可能会导致分区操作的效率较低，从而影响整体的排序性能。
