![image-20200909224245420](C:\Users\ASUS\AppData\Roaming\Typora\typora-user-images\image-20200909224245420.png)

backtrack的公式：
```js
result = []
function backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return
    
    for 选择 of 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择
```