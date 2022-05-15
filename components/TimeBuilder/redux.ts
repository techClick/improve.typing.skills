import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { ShowPopup } from '../../types/types';
import { getStorageItem, setStorageItem } from '../../utils/utils';

export interface ChallengeTimeState {
  isError: boolean,
  timings: Array<null | number>,
  selectedTiming: number | null,
  showPopup: ShowPopup,
}

const initialState: ChallengeTimeState = {
  isError: false,
  timings: [1, 2, 5, null],
  selectedTiming: null,
  showPopup: {},
};

export const counterSlice = createSlice({
  name: 'timeBuilder',
  initialState,
  reducers: {
    loadFromStorage: (state) => {
      state.timings = JSON.parse(getStorageItem('timings') || JSON.stringify([1, 2, 5, null]));
      state.selectedTiming = Number(getStorageItem('selectedTiming')) >= 0
        ? Number(getStorageItem('selectedTiming')) : null;
    },
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
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
  loadFromStorage, setIsError, setSelectedTiming, setCustomTime, setShowPopup
} = counterSlice.actions;

export const selectIsError = (state: RootState) => state.timeBuilder.isError;
export const selectSelectedTiming = (state: RootState) => state.timeBuilder.selectedTiming;
export const selectTimings = (state: RootState) => state.timeBuilder.timings;
export const selectShowPopup = (state: RootState) => state.timeBuilder.showPopup;

export default counterSlice.reducer;
