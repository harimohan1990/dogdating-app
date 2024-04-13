import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: "",
  age: "",
  height: "",
  weight: "",
  bread: "",
  vaccination: "",
  location: "",
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData(state, action) {
      return { ...state, ...action.payload };
    },
  },
});

export const { setProfileData } = profileSlice.actions;
export default profileSlice.reducer;
