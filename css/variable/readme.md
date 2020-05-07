### 360 将大厂更大家见面  树立目标

css 表示能力很强， 现代变革让css 具有了编程语言的能力， 请问那些方面或技术可以
让css 更具程序表达能力  ?
stylus  变量定义  嵌套， 函数，  css 预编译
还有其他方法吗？

- css4 推出了css variable 能力， 可以实现stylus(预编译) 一样的效果 , css4是原生支持的
- 3%  回答呢？  
  stylus 在头部定义变量   variable = value 
  把变量集中在头部定义， 方便修改和管理 
  stylus 并不需要$   但是我们用$   良好的编程风格， php $variable 
- css3  css4
  每一代有一些新特性 ，  列举一些css3 的新特性吗？
  animation(复杂动画设计)  transition(css属性修改带来过度)
  translate3d transform
  box-shadow
  flex 
  linear-gradient
  盒子模型  css2   flex 带来新的盒子能力，   
  box-sizing:border-box  盒子模型  在css3 里的全新计算方式
  position  
  rgba() 带有透明特性的
  grid  布局， filter  
  围绕面试来说， 70% 可以在面试里回答上来了

-  弹性布局 flex 
  三栏布局， 传统的双飞翼， 圣杯可以了， 
  面试里， 表达创新， flex 布局挺好的
  main 放到第一位？ 优先现实， 用户先看到主题内容， 最重要。 
  页面我们看到， 是绘制出来的， 重绘 重排
  绘制页面（布局， 大小， 颜色）需要花时间， main区域内容重要， 吸引用户眼球， 优先绘制很重要， 眼睛感觉的时间差  60FPS 
  order: -1  position/ 

## flex 弹性布局
- 父元素属性
  - flex-direction : row(默认 水平) | column  -reverse
  - flex-wrap : nowrap(默认不换行) | wrap | wrap-reverse
  - flex-flow : <flex-direction> || <flex-wrap> 简写形式
  - justify-content : 主轴对齐方式，默认水平 
                     flex-start(左对齐) | flex-end(右对齐) | center | space-between(两端对齐) | space-around(两侧间隔相等)
  - align-items : 交叉轴对齐方式 
                     flex-start | flex-end | center 
                     baseline(项目的第一行文字对齐) | stretch(占满容器)
  - align-content : 多根轴线的对齐方式 多行/列
                    flex-start | flex-end | center | space-between | space-around | stretch

- 子元素属性
  - order : 数字越小排列越靠前
  - flex-grow : 放大比例，默认0
                所有项目为1 等分空间
                一个项目为1 其余为固定值 这个项目占据剩余所有空间
  - flex-shrink : 缩小比例，默认1 空间不足则缩小
  - flex-basis : 在分配多余空间之前，项目占据的主轴空间  默认auto px / %
                flex : 0 0 25% (占据25%空间 不自动缩小)
  - flex : <flex-grow> <flex-shrink> <flex-basis>简写
  - align-self : 单个项目设置特殊的排列 会覆盖align-items 

应用 双飞翼、圣杯布局、悬挂式、固定的底栏、网格布局