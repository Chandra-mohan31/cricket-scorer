import { createSlice } from '@reduxjs/toolkit'

export const scorerSlice = createSlice({
  name: 'scorer',
  initialState: {
    score:0,
    wickets:0,
    fours: 0,
    sixes: 0,
    wides: 0,
    noball: 0,
    byes: 0,
    dots: 0,
    totalBallsBowled: 0    
  },


  reducers: {
   
    incrementByValue: (state, action) => {
      state.score += action.payload;
    },
    incrementWickets: (state) => {
      state.wickets += 1;
    },
    incrementFours: (state) => {
      state.fours += 1;
    },
    incrementSixes: (state) => {
      state.sixes += 1;
    },
    incrementWides: (state) => {
      state.wides += 1;
    },
    incrementNoball: (state) => {
      state.noball += 1;
    },
    incrementByes: (state) => {
      state.byes += 1;
    },
   
    incrementBallsBowled:( state ) => {
        state.totalBallsBowled += 1;
    },
    incrementDots: (state) => {
        state.dots += 1;
    }
  }
  
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = scorerSlice.actions
export const {
   
    incrementByValue,
    incrementWickets,
    incrementFours,
    incrementSixes,

    incrementWides,
    incrementNoball,
    incrementByes,incrementDots,
    // calculateTotalScore,
    incrementBallsBowled
  } = scorerSlice.actions;
  

export default scorerSlice.reducer