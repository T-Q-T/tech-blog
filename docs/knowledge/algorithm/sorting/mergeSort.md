# 归并排序

归并排序是建立在归并操作上的一种有效的排序算法，该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。

# 图解

![归并排序](/public/img/algorithm/归并排序.gif)

# 代码实现

```js
/*
    归并排序  时间：O(nlogn)  空间: O(n)
    思路：
    1. 将已有序的子序列合并，得到完全有序的序列；
    2. 即先使每个子序列有序，再使子序列段间有序。
    3. 若将两个有序表合并成一个有序表，称为二路归并。
*/
// 标准版本
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = arr.slice(0, mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());
  return result;
}

// 初版
function mergeSort(arr) {
  function sort(arr, left, right) {
    if (left === right) {
      return [arr[left]];
    }
    const sum = left + right;
    const mid = sum >> 1;
    const l = sort(arr, left, mid);
    const r = sort(arr, mid + 1, right);
    const temp = [];
    while (l.length && r.length) {
      temp.push(l[0] < r[0] ? l.shift() : r.shift());
    }
    return temp.concat(l, r);
  }
  return sort(arr, 0, arr.length - 1);
}
// 优化
function mergeSort1(arr, left = 0, right = arr.length - 1) {
  if (left === right) {
    return [arr[left]];
  }
  const sum = left + right;
  const mid = sum >> 1;
  const l = mergeSort1(arr, left, mid);
  const r = mergeSort1(arr, mid + 1, right);
  const temp = [];
  let i = 0,
    j = 0;
  while (i < l.length && j < r.length) {
    temp.push(l[i] < r[j] ? l[i++] : r[j++]);
  }
  return temp.concat(i !== l.length ? l.slice(i) : r.slice(j));
}

/**
 * 百度百科上的归并
 * 不知道为啥这个版本比初版的性能会好很多
 */
function mergeSort2(arr) {
  function merge(left, right) {
    var result = [];
    while (left.length > 0 && right.length > 0) {
      if (left[0] < right[0]) {
        /*shift()方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。*/
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left).concat(right);
  }
  function mergeSort(items) {
    if (items.length == 1) {
      return items;
    }
    var middle = Math.floor(items.length / 2),
      left = items.slice(0, middle),
      right = items.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
  }
  return mergeSort(arr);
}

// 百度百科-优化 百万级数据量 为600ms  比快排还快点.
function mergeSort3(arr) {
  function merge(l, r) {
    const temp = [];
    // shift的复杂度太高
    let i = 0,
      j = 0;
    while (i < l.length && j < r.length) {
      temp.push(l[i] < r[j] ? l[i++] : r[j++]);
    }
    return temp.concat(i !== l.length ? l.slice(i) : r.slice(j));
  }
  function mergeSort(items) {
    if (items.length === 1) {
      return items;
    }
    var middle = Math.floor(items.length / 2),
      left = items.slice(0, middle),
      right = items.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
  }
  return mergeSort(arr);
}

/**
 * 尝试使用迭代进行归并排序
 *
 * mergeSort4 初解
 * 思路
 * 1. 先划分好所有分组，之后按对应层级保存
 * 例子： n = 10
 * deepArr为 =
 * [
 *  [0,9] 这个初始值可以不需要
 *  [[[0,4],[5,9],[0,9]]] 每项存的是 左侧和右侧以及其父级的区间
 *  [[[0,2],[3,4],[0,4]],[[5,7],[8,9],[5,9]]]
 * ...
 * ]
 * 2. 从后往前遍历deepArr 并保存父级区间的值 就是从后往前面填表
 *
 *
 * 后面发现，这个解法有点类似动态规划，即要求上一级的0，10区间的顺序则先要获取0,4和 5，9子集的顺序
 *
 *
 */
function mergeSort4(arr) {
  const stack = [[0, arr.length - 1, 0]];
  const deepArr = [[0, arr.length - 1]];
  const map = new Array(arr.length).fill(0).map(() => new Array(arr.length));
  while (stack.length > 0) {
    const [left, right, deepth] = stack.pop();
    if (left === right) {
      map[left][right] = [arr[left]];
      continue;
    }
    const mid = (left + right) >> 1;
    stack.push([mid + 1, right, deepth + 1]);
    stack.push([left, mid, deepth + 1]);
    deepArr[deepth + 1] = deepArr[deepth + 1] || [];
    deepArr[deepth + 1].push([
      [left, mid],
      [mid + 1, right],
      [left, right],
    ]);
  }
  for (let i = deepArr.length - 1; i > 0; i--) {
    for (const temp of deepArr[i]) {
      const [[l1, r1], [l2, r2], [left, right]] = temp;
      map[left][right] = merge(map[l1][r1], map[l2][r2]);
    }
  }
  function merge(l, r) {
    const temp = [];
    // shift的复杂度太高
    let i = 0,
      j = 0;
    while (i < l.length && j < r.length) {
      temp.push(l[i] < r[j] ? l[i++] : r[j++]);
    }
    return temp.concat(i !== l.length ? l.slice(i) : r.slice(j));
  }
  return map[0][arr.length - 1];
}

/**
 * 迭代版优化
 */
function mergeSort5(arr) {
  const n = arr.length - 1;
  const stack = [[0, n, 0]];
  // deepArr里面存的内容应该也可以优化下
  const deepArr = [];
  // const map = new Array(arr.length).fill(0).map(() => new Array(arr.length));
  // 使用数组, 10万数据内存就会溢出,1 相对与要开辟一个n*n的空间， 修改为使用对象代替
  const hash = {};
  while (stack.length > 0) {
    const [left, right, deepth] = stack.pop();
    if (left === right) {
      hash[left + "-" + right] = [arr[left]];
      continue;
    }
    const mid = (left + right) >> 1;
    stack.push([mid + 1, right, deepth + 1]);
    stack.push([left, mid, deepth + 1]);
    deepArr[deepth] = deepArr[deepth] || [];
    deepArr[deepth].push([left, right]);
  }
  for (let i = deepArr.length - 1; i >= 0; i--) {
    for (const temp of deepArr[i]) {
      const [left, right] = temp;
      const mid = (left + right) >> 1;
      hash[left + "-" + right] = merge(hash[left + "-" + mid], hash[mid + 1 + "-" + right]);
    }
  }
  function merge(l, r) {
    const temp = [];
    let i = 0,
      j = 0;
    while (i < l.length && j < r.length) {
      temp.push(l[i] < r[j] ? l[i++] : r[j++]);
    }
    return temp.concat(i !== l.length ? l.slice(i) : r.slice(j));
  }
  return hash["0-" + n];
}

// 百度百科迭代版本归并排序 https://baike.baidu.com/item/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F/1639015?fr=aladdin#6
function mergeSort6(arr) {
  function mergePass(arr = [], temp = new Array(arr.length), N = arr.length, length = 1) {
    // 将每个元素看作是相邻的数组长度为1。
    let t; // 迭代深度。
    for (t = 0; Math.pow(2, t) < N; t++, length *= 2) {
      // 每次跳过的长度翻倍。
      const even = t % 2 === 0; // 复用 arr 和 temp 来回赋值。
      for (let left = 0; left < N; left += 2 * length) {
        // 左边数组起始位置 left 从0开始。
        const middle = left + length < N ? left + length : left; // 右边数组起始位置 middle 就是left + 一个数组长度length 但是不要超过 N 。
        const right = left + 2 * length < N ? left + 2 * length : N; // 右边界 right 就是 left + 两个数组长度。
        merge(even ? arr : temp, even ? temp : arr, left, middle, right); // 合并每两个相邻的数组。
      }
    }
    if (t % 2 === 0) {
      return arr; //返回arr
    }
    return temp; // 返回 temp 。
  }
  function merge(arr, temp, left, middle, right) {
    const leftEnd = middle - 1; // 通过右边数组的起始位置得到左边数组的结束位置。
    while (left <= leftEnd && middle < right) {
      // 如果‘指针’没有越界。
      if (arr[left] > arr[middle]) {
        // 如果左边数组第一个元素比右边数组第一个元素大。
        temp[left + middle - leftEnd - 1] = arr[middle++]; // 将右边数组最小的放入有序数组 temp（初始值为空)。
      } else {
        temp[left + middle - leftEnd - 1] = arr[left++]; // 将左边数组最小的放入有序数组 temp（初始值为空)。
      }
    }
    while (left > leftEnd && middle < right) {
      // 如果左边数组放完了，右边数组还有元素。
      temp[left + middle - leftEnd - 1] = arr[middle++]; // 那么依次将右边数组剩余的元素放入 temp 。
    }
    while (left <= leftEnd && middle >= right) {
      // 如果右边数组放完了，左边数组还有元素
      temp[left + middle - leftEnd - 1] = arr[left++]; // 那么依次将左边数组剩余的元素放入 temp 。
    }
  }
  return mergePass(arr);
}

const N = 1000000;

// testFn(mergeSort, N);
// testFn(mergeSort1, N);
// testFn(mergeSort2, N);
// testFn(mergeSort3, N);
// testFn(mergeSort4, N);
// testFn(mergeSort5, N);
// testFn(mergeSort6, N);

testFn([mergeSort1, mergeSort3, mergeSort5, mergeSort6], N, true);
/**
fn:mergeSort1: 630.036ms
fn:mergeSort3: 714.851ms
fn:mergeSort5: 5.832s
fn:mergeSort6: 147.332ms
fn: sort: 22.553ms
 */
function testFn(fns, n = 1000, isPerformance = false) {
  const data = new Array(n).fill(0).map(() => randomNum(0, 200));
  if (!Array.isArray(fns)) {
    fns = [fns];
  }
  fns.forEach(fn => {
    const name = fn.name;
    console.time("fn:" + name);
    const result = fn(data);
    console.timeEnd("fn:" + name);
    if (!isPerformance) {
      console.log("result:", result);
    }
  });
  console.time("fn: sort");
  data.sort((a, b) => a - b);
  console.timeEnd("fn: sort");
}
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

```