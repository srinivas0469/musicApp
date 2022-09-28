import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { FetchWordChartApi } from './services/api'
export const store = configureStore({
  reducer: {
    [FetchWordChartApi.reducerPath]: FetchWordChartApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(FetchWordChartApi.middleware)
});
