import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { ShowPopup } from '../../types/types';
import { getStorageItem, setStorageItem } from '../../utils/utils';

export interface ChallengeTimeState {
  isInputError: boolean,
  timings: Array<null | number>,
  selectedTiming: number | null,
  showPopup: ShowPopup,
}

const initialState: ChallengeTimeState = {
  isInputError: false,
  timings: [1, 2, 5, null, 0],
  selectedTiming: null,
  showPopup: {},
};

export const counterSlice = createSlice({
  name: 'timeBuilder',
  initialState,
  reducers: {
    loadFromStorage: (state) => {
      state.timings = JSON.parse(getStorageItem('timings') || JSON.stringify([1, 2, 5, null, 0]));
      state.selectedTiming = isNaN(+(getStorageItem('selectedTiming') || 'null'))
        ? null : +(getStorageItem('selectedTiming') || 'null');
    },
    setIsInputError: (state, action: PayloadAction<boolean>) => {
      state.isInputError = action.payload;
    },
    setSelectedTiming: (state, action: PayloadAction<number | null>) => {
      state.selectedTiming = action.payload;
      if (action.payload !== 3) {
        state.timings[3] = null;
        setStorageItem('timings', JSON.stringify(state.timings));
      }
      setStorageItem('selectedTiming', state.selectedTiming);
    },
    setCustomTime: (state, action: PayloadAction<number | null>) => {
      state.timings[3] = action.payload;
      setStorageItem('timings', JSON.stringify(state.timings));
    },
    setShowPopup: (state, action: PayloadAction<ShowPopup>) => {
      state.showPopup = action.payload;
    },
  },
});

export const {
  loadFromStorage, setIsInputError, setSelectedTiming, setCustomTime, setShowPopup,
} = counterSlice.actions;

export const selectIsInputError = (state: RootState) => state.timeBuilder.isInputError;
export const selectSelectedTiming = (state: RootState) => state.timeBuilder.selectedTiming;
export const selectTimings = (state: RootState) => state.timeBuilder.timings;
export const selectShowPopup = (state: RootState) => state.timeBuilder.showPopup;

export default counterSlice.reducer;
