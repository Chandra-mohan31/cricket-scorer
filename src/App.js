import { Box, Grid, Typography } from '@mui/material';
import './App.css';
import ScoreBoard from './components/ScoreBoardComponent/ScoreBoard';
import ScoringControls from './components/ScoringControlsComponent/ScoringControls';
import StatsContainer from './components/StatsContainerComponent/StatsContainer';



function App() {
  


 
  return (
    <Box className="App">
      <Typography variant='h6' sx={{
        textAlign:"center"
      }}>Cricket Scorer App</Typography>

     <Grid container sx={{
      placeItems:"center",
      placeContent:"center"
     }}>
     <Grid item xs={12} md={4}>
     <ScoreBoard />
     </Grid>
     <Grid item xs={12} md={4}>
     <StatsContainer />
     </Grid>
     </Grid>

     <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin:'30px'
     }}>
        <ScoringControls />
        </Box>
    
    </Box>
  );
}

export default App;
