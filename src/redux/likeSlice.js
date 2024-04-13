import { createSlice } from '@reduxjs/toolkit';
import apicenter from '../services/Api'; 

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setData, setLoading, setError } = likeSlice.actions;

export const fetchData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await apicenter.get('/your-endpoint'); // Replace 'your-endpoint' with your actual API endpoint
    dispatch(setData(response.data));
  } catch (error) {
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default likeSlice.reducer;
