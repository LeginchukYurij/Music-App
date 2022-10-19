import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';

import { shazamCoreApi } from './services/shazamCore';

console.log(shazamCoreApi);

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middlevare: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
});

