## 格式化上下文 FC
    Formatting Context
格式化上下文，指页面中一个渲染区域，拥有一套渲染规则，它决定了其子元素如何定位，以及与其他元素的相互关系和作用。

koa: ctx  === context
token: 泛指

```js
let a = 123;
function foo() {
  return a + 1;
}
foo()
```

## BFC
block-formating-context
隔离的容器

## 新建一个 BFC
- float
- position: absolute
- display: inline-blocks || table-cell || table-caption || flex || grid
- overflow 不为 visiable
- 根元素默认新建 BFC


## flex 布局
react-native 只支持 flex，RN 已经证明了 只用 flex 是可以很好的完成布局。

## float

文字环绕的
float 用来 布局了，float 清除
clear：both（left,right）

## BFC规则(作用)
- 盒子在垂直方向上，从上往下往下布局
- 垂直方向上的距离由 margin 决定，
  同一个 BFC 之内， 垂直方向上 block-level-box margin会折叠 (留白，够了就行)
- 由于有 float 元素，一个盒子大小可能会缩小，除非他新建 一个 BFC(overflow清理浮动)
- BFC 区域 不会 float 重叠 (左侧固定，右边自适应)
- 计算高度时会加上浮动元素的高度

## bfc 作用
1. 防止margin合并
2. 清除浮动  为 .wrap 加上 overflow: hidden;使其形成BFC，计算高度时就会计算float的元素的高度，达到清除浮动影响的效果。
3.  两栏自适应布局  为main设置 overflow: hidden; 触发main元素的BFC，BFC的区域是独立的，不会与页面其他元素相互影响，且不会与float元素重叠，因此就可以形成两列自适应布局
 

## layout
normal flow：
postion：
float: 文字环绕， 布局：几行几列
flex：