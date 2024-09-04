import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  user: null,
  accessToken: null,
  userData: {},
};

export const AuthSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.accessToken = action.payload;
    },
    removeUser: state => {
      (state.userData = initialState.userData), (state.accessToken = null);
    },
    addData: (state, action) => {
      const showData = {
        ...state.userData,
        ...action.payload,
      };
      return {
        ...state,
        userData: showData,
      };
    },
  },
});
export const {setUser, removeUser, addData} = AuthSlice.actions;
export default AuthSlice.reducer;
