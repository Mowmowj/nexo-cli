//这个文件的作用Generator核心入口 
const Generator = require('yeoman-generator')
module.exports = class extends Generator {
    //Yeoman在生成文件阶段调用此方法
    writing(){
        // this.fs.write(
        //     this.destinationPath('nexo.txt'),
        //    'nexo'
        // );
        const tmlPath = this.templatePath('shelton.js');
        const aimPath = this.destinationPath('shelton.js')
        const context = {
            success:false,
            title:'nexo'
        }
        this.fs.copyTpl(tmlPath,aimPath,context)
    }
}
