## 分治  分而治之

## 快速排序 
1. 基准值
2. 比基准值小的数  基准值 比基准值大的数 ：
    - left指针 从数组左边往后扫描 比基准值大的数 换到后面去 
    - right指针 从数组右边往左扫描 比基准值小的数 换到前面 
    - ！left < right 左右相等 找到了基准值正确的位置 
    - 如果最左边为基准的话   那就得右指针先开始找
2. 基准值归位 

## KthLarge
1. 排个序 从小到大 [k]