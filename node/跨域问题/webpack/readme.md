--save：将保存配置信息到pacjage.json的dependencies节点中。
--dev：将保存配置信息devDependencies节点中。
--save-dev：将保存配置信息到pacjage.json的devDependencies节点中。

dependencies：运行时的依赖，发布后，即生产环境下还需要用的模块

devDependencies：开发时的依赖。里面的模块是开发时用的，发布时用不到它。

官方网站是这样解释 Plugin 是为了实现那些 loader 实现不了或不适合在 loader 中实现的功能，我还喜欢用另外一种通俗的说法来描述，Loader 关心的是当个文件的处理和转换，而 Plugin 更关注于整个项目整体的处理和帮助，这里举两个例子来：生成的 bundle.js 文件现在是没有压缩过的，怎样做这件事？ 每次 HTML 文件是手动创建的，费时费力，有没有一种方法自动生成 HTML 文件？ 答案就是使用 Plugin ！

npm scripts 的好处就是：当你使用这个 script 的时候，npm 会自动寻找当前目录下 ./node_modules/webpack-dev-server/bin 这个目录下的可执行文件，

进阶用法：
1. source map 可以明确报错的代码
js推出的生成文件的格式，保存了生成的文件和源码之间的对应关系

注意：
1. style-loader 需要在css-loader前面
2. Error: Cannot find module 'webpack/lib/node/NodeTemplatePlugin'
npm link webpack --save-dev
3. 文件夹名字叫webpack，与package.json name冲突
4. Error: Cannot find module 'webpack-cli/bin/config-yargs'
    webpack": "^5.11.0",
    "webpack-cli": "^4.2.0", // 降低至3.3.12
    "webpack-dev-server": "^3.11.0"
4. 修改了配置文件需要重新打包

https://www.webpackjs.com/configuration/dev-server/#devserver-proxy