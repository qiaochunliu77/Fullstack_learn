const axios = require('axios');

async function run() {
    // 等着 ： 执行的时候 依然的异步 等着这个异步回调的完成 
    let result = await axios({
        url:'http://neteasecloudmusicapi.zhaoboy.com/search?keywords=%E6%B5%B7%E9%98%94%E5%A4%A9%E7%A9%BA'
    })
    let id = result.data.result.songs[0].id
    let detail = await axios({
        url:`http://neteasecloudmusicapi.zhaoboy.com/songs/url/?id=${id}`
    })
    console.log(detail)
}
run()