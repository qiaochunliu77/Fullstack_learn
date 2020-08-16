import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    fetch('/api/login', {
      
    })
    .then(data=> data.json())
    .then(data=> {
      console.log(data)
    })
  },[])
  return (
    <div className="App">
      123
    </div>
  );
}

export default App;
