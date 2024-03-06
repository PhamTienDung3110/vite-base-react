import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '~/api/authApi';

interface AuthState {
  value: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: AuthState = {
  value:10,
  status: 'idle',
  error: null,
};

export const fetchCounterData = createAsyncThunk(
  'counter/fetchData',
  async () => {
    const response = await fetchData(); // Assuming fetchData returns the count
    return response.count;
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCounterData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCounterData.fulfilled, (state, action: PayloadAction<number>) => {
        state.status = 'succeeded';
        state.value += action.payload;
      })
      .addCase(fetchCounterData.rejected, (state) => {
        state.status = 'failed';
        state.error = 'Failed to fetch data';
      });
  },
});

export const { increment, decrement } = authSlice.actions;

export default authSlice.reducer;