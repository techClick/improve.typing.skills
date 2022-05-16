import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { getStorageItem, setStorageItem } from '../../utils/utils';

export interface ChallengeTextState {
  isError: boolean,
  text: string,
}

const initialState: ChallengeTextState = {
  isError: false,
  text: '',
};

export const counterSlice = createSlice({
  name: 'textBuilder',
  initialState,
  reducers: {
    loadFromStorage: (state) => {
      state.text = getStorageItem('text')
        || 'The rain in Spain falls mainly on the plain. The rain is good for the soil.'
        + ' The rain is good for the Plants.';
    },
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
      setStorageItem('text', action.payload);
    },
  },
});

export const { loadFromStorage, setIsError, setText } = counterSlice.actions;

export const selectIsError = (state: RootState) => state.textBuilder.isError;
export const selectText = (state: RootState) => state.textBuilder.text;

export default counterSlice.reducer;
