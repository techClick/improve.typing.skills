import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { ShowPopup } from '../../types/types';
import { getStorageItem, setStorageItem } from '../../utils/utils';

export interface ChallengeState {
  isError: boolean,
  answer: string,
  timeout: any,
  minsLeft: number,
  secsLeft: number,
  isShowResult: boolean,
  showPopup: ShowPopup,
}

const initialState: ChallengeState = {
  isError: false,
  answer: '',
  timeout: null,
  minsLeft: 0,
  secsLeft: 0,
  isShowResult: false,
  showPopup: {},
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
    setTimer: (state, action: PayloadAction<any>) => {
      state.timeout = action.payload;
    },
    cancelTimeout: (state) => {
      clearTimeout(state.timeout);
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
    setShowPopup: (state, action: PayloadAction<ShowPopup>) => {
      state.showPopup = action.payload;
    },
  },
});

export const {
  loadFromStorage, setIsError, setAnswer, setMinsLeft, setSecsLeft, setIsShowResult, setShowPopup,
  setTimer, cancelTimeout,
} = counterSlice.actions;

export const selectIsError = (state: RootState) => state.challenge.isError;
export const selectAnswer = (state: RootState) => state.challenge.answer;
export const selectMinsLeft = (state: RootState) => state.challenge.minsLeft;
export const selectSecsLeft = (state: RootState) => state.challenge.secsLeft;
export const selectIsShowResult = (state: RootState) => state.challenge.isShowResult;
export const selectShowPopup = (state: RootState) => state.challenge.showPopup;

export default counterSlice.reducer;