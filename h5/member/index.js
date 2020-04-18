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
// const  myform = document.forms[0];
// myform.addEventListener('submit',function(event){
//     event.preventDefault();
//     const id = myform.idinput.value;
//     const name = myform.nameinput.value;
//     const avatar = myform.avatarinput.value;
//     const tell = myform.tellinput.value;
//     const hometown = myform.hometowninput.value;
//     const tr = document.createElement('tr');
//     tr.classList.add('table');
//     tr.innerHTML = `
//             <td>${id}</td>
//             <td>${name}</td>
//             <td>
//               <img src="${avatar}">
//             </td>
//             <td>${tell}</td>
//             <td>${hometown}</td>
//     `
//     tbody.appendChild(tr); 
// })
//存储到本地
var myform = document.forms[0];
var localStorage = JSON.parse(localStorage.getItem('localmember')) || [];
var localmember = localStorage;
render();
//获取数据并且 setitem到一个数组中
function addItem() {
    event.preventDefault();
    var id = myform.idinput.value;
    var name = myform.nameinput.value;
    var avatar = myform.avatarinput.value;
    var tell = myform.tellinput.value;
    var hometown = myform.hometowninput.value;
    // console.log(id,name)
    var obj = {
        id: id,
        name: name,
        avatar: avatar,
        tell: tell,
        hometown: hometown
    };
    members.push(obj);
    console.log(members);
    for (var i = 0; i < members.length; i++) {
        localStorage.setItem('localmember', JSON.stringify(members[i]));
    }
    render();
}
function render() {
    var tr = document.createElement('tr');
    tr.classList.add('table');
    tr.innerHTML =
        " \n            <td>" + localmember.id + "</td>\n            <td>" + localmember.name + "</td>\n            <td>\n              <img src=\"" + localmember.avatar + "\">\n            </td>\n            <td>" + localmember.tell + "</td>\n            <td>" + localmember.hometown + "</td>\n    ";
    tbody.appendChild(tr);
}
myform.addEventListener('submit', addItem);
