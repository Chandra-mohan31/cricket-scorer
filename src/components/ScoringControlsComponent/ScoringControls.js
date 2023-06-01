import React, { useState } from 'react';
import "./ScoringControls.css";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { incrementBallsBowled, incrementByValue, incrementByes, incrementDots, incrementFours, incrementNoball, incrementSixes, incrementWickets, incrementWides } from '../../reducers/scorerSlice';

function ScoringControls() {
    const dispatch = useDispatch();
    const [bowledBall,setBowledBall] = useState(false);
    const bowl = () => {
        setBowledBall(true);
    }

    const [resultOfTheBall,setResultOfTheBall] = useState();
    const handleChangeResultOfBall = (event) => {
        setResultOfTheBall(event.target.value);
    }

    const updateScoreCard = () => {
        if(resultOfTheBall != "wide" && resultOfTheBall != "no-ball"){
            dispatch(incrementBallsBowled());
        }
        switch (resultOfTheBall) {
            case "dot":
              // Logic for "dot ball"
              dispatch(incrementDots());
              break;
            case "single":
              // Logic for "single taken"
              dispatch(incrementByValue(1));
              break;
            case "double":
                dispatch(incrementByValue(2));
              
              break;
            case "three":
                dispatch(incrementByValue(3));
              
              break;
            case "four":
                dispatch(incrementByValue(4));
                dispatch(incrementFours());
              
              break;
            case "six":
                dispatch(incrementByValue(6));
                dispatch(incrementSixes());
              
              break;
            case "wicket":
                dispatch(incrementWickets());
              
              break;
            case "wide":
                dispatch(incrementByValue(1));
                dispatch(incrementWides());
                break;
            case "no-ball":
                dispatch(incrementByValue(1));
                dispatch(incrementNoball());
                break;
            case "byes":
                dispatch(incrementByValue(1));
                dispatch(incrementByes());
                break;
            default:
              // Default case
              break;
    }
    setBowledBall(false);
}
  return (
    <div className='score_controls'>
        {
            bowledBall ? (
            <Box sx={{
                margin:'10px'
            }}>
                <Typography variant='h5'>Enter the result of ball</Typography>
                
                <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Ball Result</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={resultOfTheBall}
    label="Age"
    onChange={handleChangeResultOfBall}
  >
    <MenuItem value="dot">dot ball</MenuItem>
    <MenuItem value="single">single taken</MenuItem>
    <MenuItem value="double">two run</MenuItem>
    <MenuItem value="three">three run</MenuItem>
    <MenuItem value="four">four</MenuItem>
    <MenuItem value="six">six</MenuItem>
    <MenuItem value="wicket">wicket</MenuItem>
    <MenuItem value="wide">wide</MenuItem>
    <MenuItem value="no-ball">no-ball</MenuItem>
    <MenuItem value="byes">byes</MenuItem>





    
  </Select>
</FormControl>
<Button variant='contained' onClick={updateScoreCard}>Update ScoreCard</Button>
                
                </Box>
            )
            :
            (
            <button onClick={bowl}>
             Bowl a ball
            </button>
            )
        }
    </div>
  )
}

export default ScoringControls