//console.log('Hello member');
//1. 不能动态更新 uuid 
//2.数据不严谨
//3.接口 声明数据类型 MembersEntity
interface MembersEntity {
    id: number;
    name: string;
    avatar: string;
    tell:string;
    hometown:string;

}
// build:{
//     assetsPublicPath:'./'
// }
const members: MembersEntity[] = [
    {
    id:1214,
    name:"guan",
    avatar:  'https://user-gold-cdn.xitu.io/2019/10/14/16dc98fe049055b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
    tell:"10086",
    hometown:"江西"
    },
    {
        id:123,
        name: 'qiao',
        avatar: 'https://user-gold-cdn.xitu.io/2019/10/14/16dc98fe049055b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        tell:"10000",
        hometown:"北京"
    },
    {
        id:234,
        name: 'xiao',
        avatar: 'https://user-gold-cdn.xitu.io/2019/10/14/16dc98fe049055b2?imageView2/1/w/100/h/100/q/85/format/webp/interlace/1',
        tell:"1008611",
        hometown:"江西"
    }
]

const tbody = document.querySelector('#member tbody');
//tbody.innerHTML = 
//从json 数组变成html数组 
    //console.log(
        tbody.innerHTML = members.map((member) => {
    return `
        <tr>
            <td>${member.id}</td>
            <td>${member.name}</td>
            <td>
              <img src="${member.avatar}">
            </td>
            <td>${member.tell}</td>
            <td>${member.hometown}</td>
        </tr>
    `
}).join("")//数组拼接 join

//获取表单内容
const  myform = document.forms[0];
myform.addEventListener('submit',function(event){
    event.preventDefault();
    const id = myform.idinput.value;
    const name = myform.nameinput.value;
    const avatar = myform.avatarinput.value;
    const tell = myform.tellinput.value;
    const hometown = myform.hometowninput.value;
    const tr = document.createElement('tr');
    tr.classList.add('table');
    tr.innerHTML = `
            <td>${id}</td>
            <td>${name}</td>
            <td>
              <img src="${avatar}">
            </td>
            <td>${tell}</td>
            <td>${hometown}</td>
    `
    tbody.appendChild(tr); 
})




//插入到html