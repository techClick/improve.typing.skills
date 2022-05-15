import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { getStorageItem, setStorageItem } from '../../utils/utils';

export interface ChallengeState {
  isError: boolean,
  answer: string,
  minsLeft: number,
  secsLeft: number,
  isShowResult: boolean,
}

const initialState: ChallengeState = {
  isError: false,
  answer: '',
  minsLeft: 0,
  secsLeft: 0,
  isShowResult: false,
};

export const counterSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {
    loadFromStorage: (state) => {
      state.answer = getStorageItem('answer') || '';
      // eslint-disable-next-line no-unneeded-ternary
      state.isShowResult = getStorageItem('isShowResult') === 'true' ? true : false;
      state.minsLeft = Number(getStorageItem('minsLeft') || 0);
      state.secsLeft = Number(getStorageItem('secsLeft') || 0);
    },
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
    },
    setAnswer: (state, action: PayloadAction<string>) => {
      state.answer = action.payload;
      setStorageItem('answer', state.answer);
    },
    setMinsLeft: (state, action: PayloadAction<number>) => {
      state.minsLeft = action.payload;
      setStorageItem('minsLeft', action.payload.toString());
    },
    setSecsLeft: (state, action: PayloadAction<number>) => {
      state.secsLeft = action.payload;
      setStorageItem('secsLeft', action.payload.toString());
    },
    setIsShowResult: (state, action: PayloadAction<boolean>) => {
      state.isShowResult = action.payload;
      setStorageItem('isShowResult', action.payload.toString());
    },
  },
});

export const {
  loadFromStorage, setIsError, setAnswer, setMinsLeft, setSecsLeft, setIsShowResult,
} = counterSlice.actions;

export const selectIsError = (state: RootState) => state.challenge.isError;
export const selectAnswer = (state: RootState) => state.challenge.answer;
export const selectMinsLeft = (state: RootState) => state.challenge.minsLeft;
export const selectSecsLeft = (state: RootState) => state.challenge.secsLeft;
export const selectIsShowResult = (state: RootState) => state.challenge.isShowResult;

export default counterSlice.reducer;
