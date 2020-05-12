const process = require('process')
const axios = require('axios')
const inquirer = require('inquirer')
const http = require('http')
const fs = require('fs')
process.title = 'node music'

let keywords = process.argv[2]
// 异步 不会立马请求回来

function request() {
    return axios({
        method: 'GET',
        url: 'http://neteasecloudmusicapi.zhaoboy.com/Search',
        params: {
            keywords
        }
    })
        .then(res => {
            // console.log(res)
            // promise then回
            return res.data
        })
}
// 异步 上下键 移动
function choose(songs) {
    // inquirer 要求每一项都是name value 
    return inquirer.prompt([
        {
            type: 'list',
            name: 'songs',
            message: `共有${songs.length}首歌=可以选择`,
            choices: songs.map(song => {
                return {
                    name: song.name,
                    value: song.id
                }
            })

        }
    ])
        .then(c => {
            // console.log(c)
            const id = c.songs;
            return id
        })
}
request()
    .then(res => {
        return choose(res.result.songs)
    })
    .then(id => {
        axios({
            url: 'http://neteasecloudmusicapi.zhaoboy.com/song/url',
            params: {
                id
            }
        })

            .then(res => {
                let url = res.data.data[0].url
                return url
            })
            .then(url => {
                if (!url) {
                    console.log('没有找到')
                    return
                }
                console.log('获取到url', url, '开始下载...')
                http.get(url, (res) => {
                    res.pipe(fs.createWriteStream(`./${id}.mp3`))
                    res.on('end', () => {
                        console.log('下载完了')
                    })

                })

            })
    })