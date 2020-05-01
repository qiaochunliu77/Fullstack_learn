window.onload = function (){
    const tablinks = this.document.querySelectorAll('.tabbar a')
    tablinks.forEach(function (link) {
        link.addEventListener('click',function(event) {
            event.preventDefault();
            // 1.取消之前的类名
            // 2.给新点击的部分 加类名
            document.querySelector('.selected')
                .classList.remove('selected');
            this.classList.add('selected')
        },false);
    })

    // 先拿到swiper 的数据 
    // bannerlist 数据
    fetch('http://localhost:3000/banner')
        .then(data => data.json())
        .then(data => {
            console.log(data)
        })
}