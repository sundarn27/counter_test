import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [ count,setCount ] = useState(0)

  const onCount = () => {
    setCount(count + 1)
  }
  const onReset = () => {
    setCount(0)
  }

  return (
    <div className="App">
      <h1>Counter : {count}</h1>
      <button onClick={onCount}>Count +</button>&ensp;
      <button onClick={onReset}>Reset !</button>
    </div>
  );
}

export default App;
