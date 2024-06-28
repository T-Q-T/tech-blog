import { resolve } from "path";
import { genSidebarConfig } from "../../.vitepress/utils/index";
const titleMap = {
  algorithm: "算法",
  sorting: "排序类",
  dp: "动态规划",
  array: "数组",
  string: "字符串",
  design: "设计",
  stack: "栈",
  mathematics: "数学",
  "two-pointers": "双指针",
  "binary-tree": "二叉树",
  "linked-list": "链表",
  "bitwise-operations": "位运算",
  "binary-search": "二分查找",
  quickSort: "1.快速排序",
  insertSort: "2.插入排序",
  bubbleSort: "3.冒泡排序",
  selectSort: "4.选择排序",
  countSort: "5.计数排序",
  shellSort: "6.希尔排序",
  mergeSort: "7.归并排序",
  maxHeapSort: "8.堆排序",
  bucketSort: "9.桶排序",
  radixSort: "10.基数排序",
};

export const algorithmSidebarConfig = genSidebarConfig({
  basePath: resolve(__dirname),
  baseLink: "/knowledge/algorithm",
  titleMap,
  sortingArr: ["sorting"],
});
