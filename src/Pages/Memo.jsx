import React, { useMemo, useState } from 'react';
import Navbar from '../Components/Navbar';

function Memo() {

    const [ number,setNumber ] = useState(0);
    const doubleNumber = useMemo(() => {
        return slowFunction(number)
    }, [number])

    function slowFunction(num) {
        console.log('Calling... ')
        for( let i=0;i<=100000;i++ ){}
        return num * 2;
    }
    

  return (
    <>
    <Navbar/>
    <div className='memo'>
        <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} /><br/>
        <span>{doubleNumber}</span>
    </div>
    </>
  );
}

export default Memo;