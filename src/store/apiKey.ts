import {createSlice} from '@reduxjs/toolkit';

const apiKeySlice = createSlice({
  name: 'apiKey',
  initialState: {
    value: '######',
  },
});

export default apiKeySlice.reducer;
