import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState {
  loggedIn: boolean,
}

const initialState: AppState = {
  loggedIn: false,
};

export const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.loggedIn = action.payload;
    },
  },
});

export const { setLoggedIn } = counterSlice.actions;

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
    thunk: true,
  }),
  reducer: {
    app: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const selectIsLoggedIn = (state: RootState) => state.app.loggedIn;
