# 基数排序

基数排序（Radix Sort）是一种非比较型的排序算法，它是通过将待排序的元素分割成位数较小的数字来进行排序的。基数排序按照个位、十位、百位等位数依次排序，最终得到排好序的数组。

基数排序的具体实现步骤如下：

找出待排序数组中的最大值，并确定其位数，假设为 d 位。
从低位到高位，依次对每一位进行排序。可以采用稳定的排序算法，如计数排序或桶排序。
对每一位进行排序后，将排序后的结果按照当前位数的顺序重新组合成数组。
重复步骤 2 和步骤 3，直到对所有位数都进行了排序。
基数排序的时间复杂度取决于位数 d 和每位的排序算法复杂度。如果每位采用计数排序，时间复杂度可以达到 O(n\*k)，其中 n 是数组长度，k 是数字的最大位数。

基数排序适用于待排序元素都是非负整数，并且位数相同的情况下，元素的范围不是很大。相对于快速排序和归并排序等比较型排序算法，基数排序的优势在于它不需要比较元素的大小，而是利用元素的位数进行排序，因此在某些情况下可以更高效。

# 图解

![基数排序](/public/img/algorithm/基数排序.gif)

# 代码实现

```js
/*
    基数排序  时间：O(n*k)  空间: O(n+k)
    思路：
    1. 取得数组中的最大数，并取得位数；
    2. arr为原始数组，从最低位开始取每个位组成radix数组；
    3. 对radix进行计数排序（利用计数排序适用于小范围数的特点）；
*/
function radixSort(arr) {
  // 找出数组中的最大数字，以确定数字的位数
  const maxNumber = Math.max(...arr);
  // 创建一个数组的浅拷贝，用于存放排序好的值
  let sortedArr = [...arr];

  // 对每一位进行计数排序，exp为当前位数的10的幂
  for (let exp = 1; Math.floor(maxNumber / exp) > 0; exp *= 10) {
    // 获取计数排序的迭代结果
    const sortedIteration = countSort(sortedArr, exp);
    sortedArr = sortedIteration;
  }

  return sortedArr;
}

// 根据表示的数字位数exp，对arr[]进行计数排序的函数。
function countSort(arr, exp) {
  const length = arr.length;
  const output = Array(length); // 输出数组
  const countMap = Array(10).fill(0, 0); // 计数数组，初始化为0

  // 统计每个数字出现的次数
  for (let i = 0; i < length; i++) {
    const digit = Math.floor(arr[i] / exp) % 10;
    count[digit]++;
  }

  // 修改count[i]，使得count[i]现在包含该数字在output[]中的实际位置
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // 构建输出数组
  for (let i = length - 1; i >= 0; i--) {
    const digit = Math.floor(arr[i] / exp) % 10;
    output[count[digit] - 1] = arr[i];
    count[digit]--;
  }

  return output;
}
```
