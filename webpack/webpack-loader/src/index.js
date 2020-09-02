import React from 'react';
import ReactDOM from 'react-dom';
import Post from './post.md';
import Header from './Header.vue'
function App() {
  return (
    <div>
    <Post></Post>
    <Header></Header>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root'));