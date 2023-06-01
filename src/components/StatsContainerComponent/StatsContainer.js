import React from 'react';
import { useSelector } from 'react-redux';

function StatsContainer() {

    const fours = useSelector((state)=>state.scorer.fours);
    const sixes = useSelector((state) => state.scorer?.sixes);

    
 
    const wides = useSelector((state) => state.scorer?.wides);
    const noballs = useSelector((state) => state.scorer?.noball);
    const byes = useSelector((state) => state.scorer?.byes);

    const dots = useSelector((state)=> state.scorer?.dots);
  return (
    <div className='extras_container'>
        <h3>WIDES : <span>{wides}</span></h3>
        <h3>NO BALLS : <span>{noballs}</span></h3>
        <h3>DOT BALLS : <span>{dots}</span></h3>
        <h3>BYES : <span>{byes}</span></h3>

        <h3>FOURS : <span>{fours}</span></h3>
        <h3>SIXES : <span>{sixes}</span></h3>
        
        

    </div>
  )
}

export default StatsContainer