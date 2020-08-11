## 
我们的网页 是沿着一条 z 轴排开的 (ps 图层)

## 层叠上下文形成
1. position 不为 static
2. filter transform perspective 不为 none
3. will-change

## layers
共同点： 都是z轴 顺序
 transform: translate3d
 will-change 设置为 opacity、transform、top、
 perspective

## 
js -> relayout -> repaint -> composite(合成) - GPU

## 提升Layers 的好处
- 当前这个layers变化不会影响其他layers
- 对于 transform、opacity 产生变化了， 不会经过relayout repaint 跳到composite

## flex
主轴：x轴
交叉轴：y轴
flex-direction: row cloum
flex-wrap
justify-content:

flex-grow
flex-basis
flex-shrink
