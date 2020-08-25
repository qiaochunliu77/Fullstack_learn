import React, { Component } from 'react';
export default class Order extends Component {
    childRef = React.createRef();
    parentRef = React.createRef();
    child = (e) => {
        console.log(1)
        e.stopPropagation()
    }
    parent = () => {
        console.log(2)
    }
    componentDidMount(){
        document.addEventListener('click', () => {
            console.log('document')
        })
        this.childRef.current.addEventListener('click', () => {
            console.log('chid')
        })
        this.parentRef.current.addEventListener('click', () => {
            console.log('parent')
        })
    }
    render() {
        return (
            <div onClick={this.parent} ref= {this.childRef}>
                <div onClick={this.child} ref = {this.childRef}>
                    child
                </div>
            </div>
        )
    }
}