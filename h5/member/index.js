// build:{
//     assetsPublicPath:'./'
// }
var members = [
    {
        id: 1214,
        name: "guan",
        avatar: 'https://user-gold-cdn.xitu.io/2019/10/14/16dc98fe049055b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        tell: "10086",
        hometown: "江西"
    },
    {
        id: 123,
        name: 'qiao',
        avatar: 'https://user-gold-cdn.xitu.io/2019/10/14/16dc98fe049055b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        tell: "10000",
        hometown: "北京"
    },
    {
        id: 234,
        name: 'xiao',
        avatar: 'https://user-gold-cdn.xitu.io/2019/10/14/16dc98fe049055b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        tell: "1008611",
        hometown: "江西"
    }
];
var tbody = document.querySelector('#member tbody');
//tbody.innerHTML = 
//从json 数组变成html数组 
//console.log(
tbody.innerHTML = members.map(function (member) {
    return "\n        <tr>\n            <td>" + member.id + "</td>\n            <td>" + member.name + "</td>\n            <td>\n              <img src=\"" + member.avatar + "\">\n            </td>\n            <td>" + member.tell + "</td>\n            <td>" + member.hometown + "</td>\n        </tr>\n    ";
}).join(""); //数组拼接 join
//获取表单内容
var myform = document.forms[0];
myform.addEventListener('submit', function (event) {
    event.preventDefault();
    var id = myform.idinput.value;
    var name = myform.nameinput.value;
    var avatar = myform.avatarinput.value;
    var tell = myform.tellinput.value;
    var hometown = myform.hometowninput.value;
    var tr = document.createElement('tr');
    tr.classList.add('table');
    tr.innerHTML = "\n            <td>" + id + "</td>\n            <td>" + name + "</td>\n            <td>\n              <img src=\"" + avatar + "\">\n            </td>\n            <td>" + tell + "</td>\n            <td>" + hometown + "</td>\n    ";
    tbody.appendChild(tr);
});
//插入到html
