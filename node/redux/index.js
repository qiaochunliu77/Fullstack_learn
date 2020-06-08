const { createStore, combineReducers } = require('redux')
let isLogin = false;
let posts = [];
// 状态 reducer（纯函数）
// 

const LOGIN_STATUS = Symbol('login/change-login-status');
const POSTS_STATUS = Symbol('posts/change-posts-status');
function loginReducer(state = isLogin, action) {
  switch (action.type) {
      case LOGIN_STATUS:
          return !state   //返回新的state不是 修改原来的变量 
      default:
          return state
  }
  return false;
}
function postsReducer(state = posts, action) {
    switch (action.type) {
        case POSTS_STATUS:
            return action.newPosts   //返回新的state不是 修改原来的变量 
        default:
            return state
    }
    return false;
}
// action：纯对象（{}）, type 字段：区分这个action 干啥的，常量, 整个应用唯一
// 自研状态管理库：单向
const loginAction = {
  type: LOGIN_STATUS,
  a: 2
}
const postAction = {
  type: POSTS_STATUS,
  newPosts: [{ a: 1 }, { a: 2 }]
}
// 分了 login posts
// 接受一个
// combineReducers 集合
const rootReducer = combineReducers({
  login: loginReducer,
  posts: postsReducer
})
// 状态存到 store
// craetestore调用了很多次reducer
const store = createStore(rootReducer);
console.log(store)
console.log('defalut', store.getState());

// action - reducer

// mapDispatchToProps
store.dispatch(loginAction);
store.dispatch(postAction);
console.log('now', store.getState());
// 去到  loginReducer 、 postsReducer，该去到哪个
