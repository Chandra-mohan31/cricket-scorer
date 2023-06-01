import React, { useEffect } from 'react';
import "./ScoreBoard.css";
import { useDispatch, useSelector } from 'react-redux';
import { Box, Typography } from '@mui/material';


function ScoreBoard() {
  const score = useSelector((state) => state.scorer?.score);
  const wickets = useSelector((state) => state.scorer?.wickets);
  const totalBallsBowled = useSelector((state) => state.scorer?.totalBallsBowled);

  //formating to display the overs completed
  function ballsToOvers() {
    const overs = Math.floor(totalBallsBowled / 6); 
    console.log(overs);
    const remainingBalls = totalBallsBowled % 6; 
    console.log(remainingBalls)

  
    return `${overs}.${remainingBalls}`;
  }
  function calculateRunRate() {
    const runRate = score / Number(ballsToOvers());
    return runRate.toFixed(2);
  }
  
  return (
    <Box className='main_score_board' sx={{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:"space-around",
      backgroundColor:"InactiveBorder",
      color:"whitesmoke",
      padding:"30px",
      borderRadius:"20px",
      
    }}>
        <Typography variant='body1'>SCORECARD</Typography>
        <Typography variant='h6' fontWeight="bold"> Score : {score} / Wickets : {wickets}</Typography>
        
        <Box className='over_details'>
            <Typography variant='subtitle1'>Overs : {ballsToOvers()}</Typography>
            
            {totalBallsBowled > 6  ? <Typography variant='caption'>(CRR : {calculateRunRate()})</Typography> : null}
        </Box>
    </Box>
  )
}

export default ScoreBoard