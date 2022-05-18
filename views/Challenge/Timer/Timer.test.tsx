import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setHasSyncedWithStorage, store } from '../../../redux/store';
import Timer from './Timer';
import { setIsShowResult, setMinsLeft, setSecsLeft } from '../redux';

afterEach(cleanup);

describe('unit tests: Timer', () => {
  test('component renders', () => {
    render(
      <Provider store={store}>
        <Timer />
      </Provider>,
    );
  });
  test('timer works correctly 1', async () => {
    store.dispatch(setHasSyncedWithStorage(true));
    store.dispatch(setMinsLeft(2));
    store.dispatch(setIsShowResult(true));
    await new Promise((r) => setTimeout(r, 50));
    render(
      <Provider store={store}>
        <Timer />
      </Provider>,
    );
    await new Promise((r) => setTimeout(r, 1000));
    expect(store.getState().challenge.minsLeft).toBe(1);
  });
  test('timer works correctly 2', async () => {
    store.dispatch(setHasSyncedWithStorage(true));
    store.dispatch(setSecsLeft(5));
    store.dispatch(setIsShowResult(true));
    await new Promise((r) => setTimeout(r, 50));
    render(
      <Provider store={store}>
        <Timer />
      </Provider>,
    );
    await new Promise((r) => setTimeout(r, 600));
    expect(store.getState().challenge.secsLeft).toBe(5);
  });
});
