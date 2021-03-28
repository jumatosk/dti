import {configureStore} from '@reduxjs/toolkit';
import apiKeyReducer from './apiKey';

const store = configureStore({
  reducer: {
    apiKey: apiKeyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
