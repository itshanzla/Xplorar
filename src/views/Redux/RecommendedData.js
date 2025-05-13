import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  selectedCountry: null,
};

const countrySlice = createSlice({
  name: 'country',
  initialState,
  reducers: {
    setSelectedCountry: (state, action) => {
      state.selectedCountry = action.payload;
    },
    clearSelectedCountry: state => {
      state.selectedCountry = null;
    },
  },
});

export const {setSelectedCountry, clearSelectedCountry} = countrySlice.actions;
export default countrySlice.reducer;
