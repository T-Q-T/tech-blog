# 堆排序

堆排序是一种树形选择排序，是对直接选择排序的有效改进。

堆的定义：具有 n 个元素的序列（h1,h2,…,hn),当且仅当满足（hi<=h2i,hi<=h2i+1）或（hi>=h2i,hi>=h2i+1）(i=1,2,…,n/2)时称之为堆。在这里只讨论满足前者条件的堆。由堆的定义可以看出，堆顶元素（即第一个元素）必为最小项（大项）。

# 图解

![堆排序](/public/img/algorithm/堆排序.gif)

# 代码实现

```js
/*
    堆排序  时间：O(nlogn)  空间: O(1)
    大顶堆： 特性
       1. 完全二叉树
       2. 父节点比左右子节点都要大
    思路：
    1. 将初始待排序关键字序列(R1,R2….Rn)构建成大顶堆，此堆为初始的无序区；
    2. 将堆顶元素R[1]与最后一个元素R[n]交换，此时得到新的无序区(R1,R2,……Rn-1)和新的有序区(Rn),且满足R[1,2…n-1]<=R[n]；
    3. 由于交换后新的堆顶R[1]可能违反堆的性质，因此需要对当前无序区(R1,R2,……Rn-1)调整为新堆，然后再次将R[1]与无序区最后一个元素交换，得到新的无序区(R1,R2….Rn-2)和新的有序区(Rn-1,Rn)。不断重复此过程直到有序区的元素个数为n-1，则整个排序过程完成。
*/

// 标准版
/**
 * 堆排序函数，对输入数组进行堆排序
 * @param {Array} arr 待排序的数组
 * @returns {Array} 排序后的数组
 */
function heapSort(arr) {
  let len = arr.length;
  // 构建最大堆
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    adjustHeap(arr, i, len);
  }
  // 将最大元素逐个移到数组末尾，再调整堆
  for (let i = len - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]]; // 将堆顶元素（当前最大值）与末尾元素交换
    adjustHeap(arr, 0, i); // 调整堆，维持最大堆性质
  }
  return arr;
}

/**
 * 调整堆的函数，在给定位置i的子树中保持最大堆性质
 * @param {Array} arr 待调整的数组
 * @param {number} i 当前节点的下标
 * @param {number} len 堆的长度
 */
function adjustHeap(arr, i, len) {
  let temp = arr[i]; // 当前节点的值
  for (let j = 2 * i + 1; j < len; j = 2 * j + 1) {
    // 找到左孩子节点
    if (j + 1 < len && arr[j] < arr[j + 1]) {
      j++; // 如果右孩子节点存在且大于左孩子节点，则选择右孩子节点
    }
    if (arr[j] > temp) {
      // 如果孩子节点的值大于当前节点的值，则将孩子节点的值赋给当前节点，并继续向下调整
      arr[i] = arr[j];
      i = j;
    } else {
      break; // 否则跳出循环，当前节点已满足最大堆性质
    }
  }
  arr[i] = temp; // 将最初的当前节点的值放入最终位置
}

// 初版实现
/**
 * 大顶堆排序函数，对输入数组进行大顶堆排序
 * @param {Array} arr 待排序的数组
 * @returns {Array} 排序后的数组
 */
function maxHeapSort(arr) {
  const n = arr.length; // 数组长度
  const heap = []; // 堆数组
  // 将输入数组转换为大顶堆结构
  for (let i = 0; i < n; i++) {
    insert(heap, arr[i]);
  }
  // 将堆顶元素（最大值）逐个移到数组末尾，再调整堆
  for (let j = n - 1; j >= 0; j--) {
    [heap[0], heap[j]] = [heap[j], heap[0]]; // 将堆顶元素与末尾元素交换
    downHeap(heap, 0, j); // 调整堆，维持大顶堆性质
  }
  return heap;
}

/**
 * 向大顶堆中插入元素的函数
 * @param {Array} heap 大顶堆数组
 * @param {*} x 待插入的元素
 */
function insert(heap, x) {
  heap.push(x); // 将元素插入堆末尾
  upHeap(heap, 0, heap.length - 1); // 调整堆，保持大顶堆性质
}

/**
 * 向上调整大顶堆的函数
 * @param {Array} arr 大顶堆数组
 * @param {number} low 起始位置
 * @param {number} high 结束位置
 */
function upHeap(arr, low, high) {
  let i = high; // 当前节点位置
  let j = (high - 1) >> 1; // 父节点位置
  while (j >= low) {
    if (arr[j] < arr[i]) {
      [arr[j], arr[i]] = [arr[i], arr[j]]; // 如果父节点值小于当前节点值，则交换它们的值
    }
    i = j;
    j = (i - 1) >> 1; // 更新当前节点和父节点位置
  }
}

/**
 * 向下调整大顶堆的函数
 * @param {Array} arr 大顶堆数组
 * @param {number} low 起始位置
 * @param {number} high 结束位置
 */
function downHeap(arr, low, high) {
  let i = low; // 当前节点位置
  let j = i * 2 + 1; // 左孩子节点位置
  while (j < high) {
    if (j + 1 < high && arr[j + 1] > arr[j]) {
      j = j + 1; // 如果右孩子节点存在且大于左孩子节点，则选择右孩子节点
    }
    if (arr[i] < arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // 如果孩子节点的值大于当前节点的值，则交换它们的值
      i = j;
      j = j * 2 + 1; // 更新当前节点和左孩子节点位置
    } else {
      break; // 否则跳出循环，当前节点已满足大顶堆性质
    }
  }
}

// 初版优化版
/**
 * 堆排序函数，对输入数组进行堆排序
 * @param {Array} array 待排序的数组
 * @returns {Array} 排序后的数组
 */
function heapSort1(array) {
  let j;
  let temp;
  let size = array.length;
  // 构建最大堆
  for (let i = Math.floor(size / 2) - 1; i >= 0; i--) {
    heapify(array, size, i);
  }
  // 将最大元素逐个移到数组末尾，再调整堆
  for (j = size - 1; j >= 0; j--) {
    temp = array[0]; // 交换堆顶元素（最大值）与末尾元素
    array[0] = array[j];
    array[j] = temp;
    heapify(array, j, 0); // 调整堆，维持最大堆性质
  }
  return array;
}

/**
 * 将指定节点为根节点的子树调整为最大堆
 * @param {Array} array 待调整的数组
 * @param {number} size 当前堆的大小
 * @param {number} root 当前子树的根节点下标
 */
function heapify(array, size, root) {
  let largest = root; // 初始化最大值为根节点
  const left = 2 * root + 1; // 左子节点下标
  const right = 2 * root + 2; // 右子节点下标
  // 如果左子节点存在且大于当前最大值，则更新最大值
  if (left < size && array[left] > array[largest]) {
    largest = left;
  }
  // 如果右子节点存在且大于当前最大值，则更新最大值
  if (right < size && array[right] > array[largest]) {
    largest = right;
  }
  // 如果最大值不是根节点，则交换根节点与最大值节点的值，并递归调整受影响的子树
  if (largest !== root) {
    [array[root], array[largest]] = [array[largest], array[root]]; // 交换节点值
    heapify(array, size, largest); // 递归调整受影响的子树
  }
}

// console.log(heapSort1([2, 1, 3, 4, 9, 5]));
const N = 10000000;
testFn([maxHeapSort, heapSort1], N, true);

function testFn(fns, n = 1000, isPerformance = false) {
  const data = new Array(n).fill(0).map(() => randomNum(0, 200));
  if (!Array.isArray(fns)) {
    fns = [fns];
  }
  fns.forEach((fn) => {
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
