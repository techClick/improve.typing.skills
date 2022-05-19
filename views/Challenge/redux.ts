import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { ShowPopup } from '../../types/types';
import { getStorageItem, setStorageItem } from '../../utils/utils';

export interface ChallengeState {
  isInputError: boolean,
  answer: string,
  timeout: any,
  minsLeft: number,
  secsLeft: number,
  isShowResult: boolean,
  showPopup: ShowPopup,
  hasCompletedChallenge: boolean,
}

const initialState: ChallengeState = {
  isInputError: false,
  answer: '',
  timeout: null,
  minsLeft: 0,
  secsLeft: 0,
  isShowResult: false,
  showPopup: {},
  hasCompletedChallenge: true,
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
    setIsInputError: (state, action: PayloadAction<boolean>) => {
      state.isInputError = action.payload;
    },
    setAnswer: (state, action: PayloadAction<string>) => {
      state.answer = action.payload;
      setStorageItem('answer', state.answer);
    },
    setTimer: (state, action: PayloadAction<any>) => {
      console.log('RESET');
      state.timeout = action.payload;
    },
    cancelTimeout: (state) => {
      console.log('Deployment test: DONE 5');
      clearTimeout(state.timeout);
      state.timeout = null;
      state.hasCompletedChallenge = true;
    },
    setHasCompletedChallenge: (state) => {
      state.hasCompletedChallenge = false;
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
      if (state.isShowResult) state.hasCompletedChallenge = false;
      setStorageItem('isShowResult', action.payload.toString());
    },
    setShowPopup: (state, action: PayloadAction<ShowPopup>) => {
      state.showPopup = action.payload;
    },
  },
});

export const {
  loadFromStorage, setIsInputError, setAnswer, setMinsLeft, setSecsLeft, setIsShowResult,
  setShowPopup, setTimer, cancelTimeout, setHasCompletedChallenge,
} = counterSlice.actions;

export const selectIsInputError = (state: RootState) => state.challenge.isInputError;
export const selectAnswer = (state: RootState) => state.challenge.answer;
export const selectMinsLeft = (state: RootState) => state.challenge.minsLeft;
export const selectSecsLeft = (state: RootState) => state.challenge.secsLeft;
export const selectIsShowResult = (state: RootState) => state.challenge.isShowResult;
export const selectShowPopup = (state: RootState) => state.challenge.showPopup;
export const selectHasCompletedChallenge = (state: RootState) => state
  .challenge.hasCompletedChallenge;

export default counterSlice.reducer;
