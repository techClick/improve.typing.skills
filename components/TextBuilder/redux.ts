import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { getStorageItem, setStorageItem } from '../../utils/utils';

export interface InputState {
  isError: boolean,
  text: string,
}

const initialState: InputState = {
  isError: false,
  text: getStorageItem('text') || 'The rain in Spain falls usually in the plain',
};

export const counterSlice = createSlice({
  name: 'textBuilder',
  initialState,
  reducers: {
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
      setStorageItem('text', action.payload);
    },
  },
});

export const { setIsError, setText } = counterSlice.actions;

export const selectIsError = (state: RootState) => state.textBuilder.isError;
export const selectText = (state: RootState) => state.textBuilder.text;

export default counterSlice.reducer;
