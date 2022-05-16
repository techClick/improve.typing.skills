import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { getStorageItem, setStorageItem } from '../../utils/utils';

export interface ChallengeTextState {
  isInputError: boolean,
  text: string,
}

const initialState: ChallengeTextState = {
  isInputError: false,
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
    setIsInputError: (state, action: PayloadAction<boolean>) => {
      state.isInputError = action.payload;
    },
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
      setStorageItem('text', action.payload);
    },
  },
});

export const { loadFromStorage, setIsInputError, setText } = counterSlice.actions;

export const selectIsInputError = (state: RootState) => state.textBuilder.isInputError;
export const selectText = (state: RootState) => state.textBuilder.text;

export default counterSlice.reducer;
