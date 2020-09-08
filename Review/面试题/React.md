### 17.useMemo和useCallback的区别

```
1.useMemo是让函数在依赖不改变的情况下，不对这个值进行重新运算	
1.useCallback是对函数进行缓存，用于子组件引用父组件的函数，父组重新渲染，避免函数的引用发生改变

2.useMemo优化的是函数进行运算的开销
2.useCallback优化的组件重新渲染的开销
```
