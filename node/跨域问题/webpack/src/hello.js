//hello.js

export default function () {
  const axios = require('axios');
  axios({
    url: '/api', // 向9090请求数据
  })
  .then(res => {
    console.log('拿到的结果是', res)
  })

}