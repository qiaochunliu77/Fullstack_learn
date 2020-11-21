### 语义化标签 搜索引擎优化

```
简单来说，就是让机器可以读懂你网页的内容。让爬虫对你网站的内容更快的进行分析处理，所以要用到html语义化标签。

<h>,<title>网页seo的标题
meta name="description" content="网站描述"
a href="链接地址" title="链接说明"
img src="图片链接地址" alt="图片说明"
nav,header,footer,article,section,
```

## css

1. css属性名和属性值不区分大小写

2. 行内元素 的margin-top(外边距）在水平方向上有效果。

   在垂直方向上，需要变成行块元素才起作用。

3. 有一个<P>标签是font-size: 10rem，标签中的文本大小是否会随着窗口尺寸的改变而改变?

   rem,em 不会  pxtorem + 蓝湖 

   media query

   vw/vh 

   百分比

   calc

### 选择器 及权重

```
 内联>style>link
!import>行内样式id>类名，属性，伪类>标签，伪元素>通配符选择器
```

### 块级 行内元素

```
块级元素：
独占一行，宽度自动填满父容器的宽度；
可以设置width，height；margin，padding；
对应display：block
行内元素、内联元素：
宽度随内容变化，在父容器内排列，排列不下，才会换行。
width，height设置无效；
只有mr，ml，pr，pl起作用，其他边距无效；
对应display：inline；
```



##### 盒模型

w3c-标准盒模型：宽度 = content内容 （box-sizing:content-box）

IE-怪异盒模型：content+padding+border  （box-sizing:border-box）

## 
stylus/less:预处理器->  css  ->  postCss:后处理器（类似于js里面的babel)
px-ro-rem
px-to-vw

## 浮动
float最初是用来做文字环绕图片的 
1. 脱离文档流 
2. 也是因为脱了 ，float会让父级元素的高度丢掉，所以 要清除浮动 
方法：

1. 在最后一个浮动标签后，新加一个 **（块级）**标签，给其设置clear：both/left/right
    缺点：增加了标签 
    最好的：
   .clear::after {
      content: '';
      clear: both;
      display: block;
    }
     clear CSS 属性指定一个元素是否必须移动(清除浮动后)到在它之前的浮动元素下面。clear 属性适用于浮动和非浮动元素。
2. overflow:hidden 
    BFC:计算父级高度的时候 浮动元素 参与在内 
    overflow不为visible就会创建bfc

## BFC 
块级格式化上下文  块级元素布局的规则 

具有BFC特性的元素 可以 看做 隔离的 盒子 。里面的布局 不会影响到外面 
参考 https://zhuanlan.zhihu.com/p/25321647
创建BFC?
body 根元素
浮动元素：float 除 none 以外的值
绝对定位元素：position (absolute、fixed)
display 为 inline-block、table-cells、flex
overflow 除了 visible 以外的值 (hidden、auto、scroll)

- 特性 
1. 同一个BFC下 外边距margin 会发生 折叠 ，按较大的margin
2. BFC 可以包含浮动的 元素 （清除浮动） overflow:hidden
3. BFC可以阻止元素被浮动元素覆盖 

## IFC 行内元素布局的规则

行内默认以baseLine对齐

行内元素高度由line-height 决定 ，大小font-size决定 

## position
relative: 自身
absolute: 错误 ：上级第一个非static 
    相对于它的包含块来定位 

- 包含块
1. 如果position 为 static，relative，sticky 由他最近的祖先块元素
2. absulote 由最近的 非 static的块元素 
3. fixed 
4. absulote或fixed 包含块也可能是 父元素有以下属性的块
    - transform perspective
    - will-change
    - filter
    - contain 
### px，em，rem 的区别

* px  绝对单位。相对于显示器屏幕分辨率而言的
* em 是相对单位，相对于当前对象的字体尺寸。如当前的字体未被设置，或者单位也为em，则会继承父级元素的字体大小。
* rem 是 CSS3 新增的一个相对单位(root em，根 em)，使用 rem 为元素设定字体大小时，仍然是相对大小， 但相对的只是 HTML 根元素。根元素默认为16px

## 水平垂直居中

flex 给父元素设置 display:flex  jc ai

**已知宽高：**

1.  父元素：relative

   子元素：absolute

   ​	top：50% left:50%

   ​	margin-top: -子元素高的一半px  margin-left: -子元素宽的一半

2. 父元素：relative

   子元素：absolute

   ​	top：calc(50% - 一半px ) 

   ​	left：calc(50% - 一半px)

**未知宽高**

1. 父元素：relative

   子元素：absolute

   ​	top：0 left：0 right：0 bottom：0  margin：auto

2. 父元素：relative

   子元素：absolute

   top：50% left:50%     

   transform: translate(-50%, -50%)

### 吸顶

1. 要吸顶的元素： position：sticky 兼容性不好
2. **obj.getBoundingClientRect().top**获得某个元素相对于视窗的位置
3. **offsetTop**获得元素到父级的距离
4. 重绘次数过多，性能下降：IntersectionObserver +throttle 







