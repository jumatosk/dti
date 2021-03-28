import {createSlice} from '@reduxjs/toolkit';

const apiKeySlice = createSlice({
  name: 'apiKey',
  initialState: {
    value: '68b7a486',
  },
});

export default apiKeySlice.reducer;
