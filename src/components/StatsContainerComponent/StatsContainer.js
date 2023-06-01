import { Box, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import "./StatsContainer.css";
function StatsContainer() {

    const fours = useSelector((state)=>state.scorer.fours);
    const sixes = useSelector((state) => state.scorer?.sixes);

    
 
    const wides = useSelector((state) => state.scorer?.wides);
    const noballs = useSelector((state) => state.scorer?.noball);
    const byes = useSelector((state) => state.scorer?.byes);

    const dots = useSelector((state)=> state.scorer?.dots);
  return (
    <Box className='extras_container' sx={{
      padding:'20px'
    }}>
        <Box sx={{
          margin:'10px',
          backgroundColor:'darkviolet',
          padding:"5px",
          color:'white',
          borderRadius:"10px"        }}>
        <Typography variant='h6'>Wides : <span style={{
          fontSize:'16px'
        }}>{wides}</span></Typography>
        <Typography variant='h6'>No Balls : <span>{noballs}</span></Typography>
        <Typography   variant='h6'>Dot Balls : <span>{dots}</span></Typography>
        </Box>
       <Box sx={{
        margin:'10px',
        backgroundColor:'Highlight',
        padding:"5px",
        color:'white',
        borderRadius:"10px" 
       }}>
       <Typography variant='h6'>Byes : <span>{byes}</span></Typography>

      <Typography variant='h6'>Fours : <span>{fours}</span></Typography>
      <Typography variant='h6'>Sixes : <span>{sixes}</span></Typography>
       </Box>
        
        

    </Box>
  )
}

export default StatsContainer