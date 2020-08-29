var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    // The name `constructor` is important here
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts);

        // Next, add your custom code
        this.option('babel'); // This method adds support for a `--babel` flag
    }

    method1() {
        this.log('method 1 just ran');
    }

    method2() {
        this.log('method 2 just ran');
    }
    async prompting() {
        // inrequire
        const answers = await this.prompt([
            {
                type: "input",
                name: "name",
                message: "Your project name",
                default: this.appname // Default to current folder name
            },
            {
                type: "confirm",
                name: "cool",
                message: "use loadDash?",
            },
            {
                type: "list",
                name: "installTool",
                message: "请选择你要使用的包管理器?",
                choices: ['npm', 'yarn']
            }
        ]);
        this.answers = answers.installTool;
        this.log("app name", answers.name);
        this.log("cool feature", answers.cool);
        this.log("installTool", answers.installTool);
    }
    writing() {
        this.fs.copyTpl(
            this.templatePath('./'),
            this.destinationPath('./'), { // yo 运行的根目录
            appname: this.appname,
            cool:this.cool
            }
        );
        if(this.cool){
            // 对目标文件中的package进行扩充
            this.fs.extendJSON(this.destinationPath('package.json')),
            {
                dependencies:{
                    lodash:'^4.17.15'
                }
            }
        }
    }
    install() {
        this.installTool === 'yarn' ? 
        this.yarnInstall() :this.npmInstall()
        // cnpm

    }
    end() {
        
    }
};
