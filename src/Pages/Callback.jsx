import React, { useState, useCallback } from 'react';
import List from './List';
import Navbar from '../Components/Navbar';

function Callback() {
  const [number, setNumber] = useState(0);

  const getItems = useCallback((increment) => {
    return [ number + increment, number + 1 + increment, number + 2 + increment ]
  }, [number]);

  return (
    <>
    <Navbar/>
    <div className='callback'>
        <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} /><br/>
        <List getItems={getItems} />
    </div>
    </>
  );
}

export default Callback;