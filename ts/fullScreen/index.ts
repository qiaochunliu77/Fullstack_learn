//  ts: 内置 + 外部类型
// boolean number string
// 数组:每一项类型相同  元祖：每一项类型不必相同
let list1:number[] = [1,2]
let list2:[string,number]
// 枚举:把每种可能枚举出来
enum Color {red,blue,green}
let c :Color = Color.red; // c=0
let colorname = Color[0]; //'red'
// any:任意类型
// void:无返回值
function test():void{

}
// null, undefined
// never
// object

// 自定义类型
// 联合类型 或者的关系
type RFSmethods = 'requestFullscreen' | 'webkitRequestFullScreen' | 'mozRequestFullScreen' | 'msRequestFullscreen';
interface Element {
    webkitRequestFullScreen(): any, 
    mozRequestFullScreen(): any,
    msRequestFullscreen(): any
}

let RFS_METHOD : RFSmethods
if('requestFullscreen' in document.body){
    RFS_METHOD = 'requestFullscreen'
}else if('webkitRequestFullScreen' in document.body){
    RFS_METHOD = 'webkitRequestFullScreen'
}
else if('mozRequestFullScreen' in document.body){
    RFS_METHOD = 'msRequestFullscreen'
}
else if('msRequestFullscreen' in document.body){
    RFS_METHOD = 'msRequestFullscreen'
}
function beFull(el:Element) {
    el[RFS_METHOD]();
}
// ts 结合 原生dom html
// ts 结合 Node
// ts 结合 react
const btn = document.querySelector('.btn');
const box = document.querySelector('.box')
if(btn) {
    btn.addEventListener('click', function() {
        if(box instanceof Element){
            beFull(box)
        }
    })
}
