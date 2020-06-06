## layout 
display: flex | block | inline-block

## 正常的文档流
脱离文档流：float：left position

## normal flow
行内元素 inline-level-box ：水平从左往右一个接着一个的布局,垂直方向默认会baseline对齐
块级元素 block-level-box ：垂直方向从上到下一个接着一个布局
relative 定位：占据normal flow自己的空间

## baseline 
inline 没有任务文字 基线baseline在底部 图片会与基线对齐

## position
都会把自己的位置让出来：
absolute：相对于他的 containing block
fixed：相对于view

## comtaining block
    盒子 大小尺寸 都是依据包含块来计算的 
    一个盒子的包含块：comtaining block箱子，箱子装着一个个元素 ，箱子里的元素该放到哪里，大小？
    首先确定包含快的位置大小 


    ```css 
    width:100%  
    height:100%
    padding
    margin
    ...百分比： 基本都是相对于包含块计算
    ```
## 怎么确定comtaining block
确定一个元素的包含块的过程完全依赖于这个元素的 position 属性：

- 如果 position 属性为  relative、static 或 sticky，包含块可能由它的**最近的祖先块元素**（比如说inline-block, block 或 list-item元素）
- 如果 position 属性为 absolute ，包含块就是由它的最近的 position 的值不是 static （也就是值为fixed, absolute, relative 或 sticky）的祖先元素。
- 如果 position 属性是 fixed，包含块是 viewport 
- 如果 position 属性是 absolute 或 fixed，包含块也可能是由满足以下条件的最近**父级元素**的内边距区的边缘组成的：
    - transform / perspective 不是 none
    - will-change是transform / perspective
    - filter 不是none 或者  will-change 是 filter(only works on Firefox).
    - contain是 paint (例如: contain: paint;)

## layout
- normal flow
- float
- position
- flex

## flex
容器
flex-direction: row / column
justify-content: center / start / end
align-item: center / start / end
