let action1 = {
    type: 'INCREMENT'
}
let action2 = {
    type: 'DECREMENT'
}
function reducer(state = 1, action) {
    if (action.type === 'INCREMENT') {
        return state + 1
    } else if (action.type === 'DECREMENT') {
        return state - 1
    } else {
        return state
    }
}
function createStore(reducer) {
    let state;// 传null的话 就认为null为默认值 
    function dispatch(action) {
        state = reducer(state, action)
    }
    // 先dispatch一次 
    dispatch({ type: '任意的类型' }) // 让state为reducer那里的默认值 
    function getState() {
        return state
    }
    return {
        dispatch, getState
    }
}

let store = createStore(reducer) //创建store
// store.getState
store.dispatch(action1)
store.dispatch(action1)
console.log(store.getState())

// react-thunk
// let action3 = function (dispatch) {
//     axios().then(() => {
//         dispatch()
//     })
// }
// store.dispatch(action3)

