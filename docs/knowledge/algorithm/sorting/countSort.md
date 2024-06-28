# 计数排序

计数排序是一种非基于比较的排序算法，其核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。 

# 图解

![计数排序](/public/img/algorithm/计数排序.gif)

# 代码实现

```js
/*
    计数排序  时间：O(n + k)  空间: O(k)
    思路：
    1. 找出待排序的数组中最大和最小的元素
    2. 统计数组中每个值为i的元素出现的次数，存入数组C的第i项
    3. 对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）
    4. 反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1
*/
function countSort(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let count = new Array(max - min + 1).fill(0);
  for (let i = 0; i < arr.length; i++) {
    count[arr[i] - min]++;
  }
  let index = 0;
  for (let i = min; i <= max; i++) {
    while (count[i - min]-- > 0) {
      arr[index++] = i;
    }
  }
  return arr;
}