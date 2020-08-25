import React from 'react';
class Mix extends React.Component {
    state = {
        visible: false
    }
    handleToogle = (e) => {
        console.log(1)
        this.setState({
            visible: !this.state.visible
        })
        e.stopPropagation()
        // 所有的都被放到document上面 
        // 所有的事件统一采用事件监听 都是一个document.addE()
        // 在click执行的时候 内部维护了 元素和事件 处理函数的关系
        // e.stopPropagation() 也是react自己实现的 阻止冒泡
        // 仅限于 都用react的事件才生效 
        // 合成事件 就是react的一套事件系统  
    }
    componentDidMount() {
        document.body.addEventListener('click', () => {
            console.log(2)
            this.setState({
                visible: false
            })
        })
    }
    render() {
        return (
            <div>
                <button onClick = {this.handleToogle}> toggle</button>
                <div style={{display: this.state.visible ? 'block' : 'none'}}>内容</div>
            </div>
        )
    }
}
export default Mix