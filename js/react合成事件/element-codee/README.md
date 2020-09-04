## 安装
- cnpm i -g @vue/cli 安装vue命令行
- vue-cli 4. vue3.0 变化太大 拥抱了react
vue create name
    vue 2.0 安装命令 vue init webpack project-name 传统现在流行
    vue 3.0 安装命令 vue create project-name 
vue - 原生支持ts 
    - PWA 渐进式网页应用程序支持 
    - router vuex全家桶
    - CSS pre-processors stylus vw autoprefixer
        预处理 （编译）sass/stylus autoprefixer插件（保证兼容性） 加前缀
        px-vw-   cssnext
    - linter 代码确定风格 
        eslink ; " ' tab 保证大家代码 风格一样
        不用的变量不要定义 要删除干净
        对齐代码 
        "" ''
        js的结尾不加分号 编译器会自动加
    - unit Testing E2e 测试
- npm run serve 运行项目


## 阅读element-ui源码 解析
https://github.com/ElemeFE/element/blob/dev/packages/button/src/button.vue
- Button组件源码分析
    1. 定义组件
    2. <slot></slot>
    3. :class 动态类名 动态绑定属性
    4. @click
    5. type
    6. export default
        props  data 传值 外界传入
        computed 计算属性 设置阈值
        created() 生命周期
        inject

## react和vue的区别
vue比react多了一个 计算属性的API computed，react没有
vue API特别友好 好入门 渐进式
react组件化 没必要
研究vue的源码分析
Badge 标记属性



