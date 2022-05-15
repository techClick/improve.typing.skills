import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { getStorageItem, setStorageItem } from '../../utils/utils';

export interface TimeState {
  isError: boolean,
}

const initialState: TimeState = {
  isError: false,
};

export const counterSlice = createSlice({
  name: 'timeBuilder',
  initialState,
  reducers: {
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
  },
});

export const { setIsError } = counterSlice.actions;

export const selectIsError = (state: RootState) => state.timeBuilder.isError;

export default counterSlice.reducer;
