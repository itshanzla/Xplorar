import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  destination: null,
  days: null,
  interests: [],
  travelMode: null,
  budget: null,
  
};

export const AISlice = createSlice({
  name: 'AI',
  initialState,
  reducers: {
    setDestination: (state, action) => {
      state.destination = action.payload;
    },

    setDays: (state, action) => {
      state.days = action.payload;
    },

    setInterests: (state, action) => {
      state.interests = action.payload;
    },

    setTravelMode: (state, action) => {
      state.travelMode = action.payload;
    },

    setBudget: (state, action) => {
      state.budget = action.payload;
    },

    resetPreferences: state => {
      return initialState;
    },
  },
});

export const {
  setDestination,
  setDays,
  setInterests,
  setTravelMode,
  setBudget,
  resetPreferences,
} = AISlice.actions;

export default AISlice.reducer;
