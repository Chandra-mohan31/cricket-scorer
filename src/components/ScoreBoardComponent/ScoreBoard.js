import React, { useEffect } from 'react';
import "./ScoreBoard.css";
import { useDispatch, useSelector } from 'react-redux';


function ScoreBoard() {
  const score = useSelector((state) => state.scorer?.score);
  const wickets = useSelector((state) => state.scorer?.wickets);
  const totalBallsBowled = useSelector((state) => state.scorer?.totalBallsBowled);


  return (
    <div className='main_score_board'>
        <h1>TEAM1</h1>
        <h3> Score : {score} / Wickets : {wickets}</h3>

        <div className='over_details'>
            <p>Overs(balls bowled) : {totalBallsBowled}</p>
        </div>
    </div>
  )
}

export default ScoreBoard