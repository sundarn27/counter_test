import { useState } from 'react';

function Counter() {

  const [ count,setCount ] = useState(0)

  const onCount = () => {
    setCount(count + 1)
  }
  const onReset = () => {
    setCount(0)
  }

  return (
    <div >
      <h1>Counter : {count}</h1>
      <button onClick={onCount}>Count +</button>&ensp;
      <button onClick={onReset}>Reset !</button>
    </div>
  );
}

export default Counter;
