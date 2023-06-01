import './App.css';
import ScoreBoard from './components/ScoreBoardComponent/ScoreBoard';
import ScoringControls from './components/ScoringControlsComponent/ScoringControls';
import StatsContainer from './components/StatsContainerComponent/StatsContainer';



function App() {
  


 
  return (
    <div className="App">
     <div className='top_bar'>
     <ScoreBoard />
     <StatsContainer />
     </div>
     <div className='score_controls_container'>
        <ScoringControls />
     </div>
    
    </div>
  );
}

export default App;
