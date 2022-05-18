import React from 'react';
import { render, cleanup, act, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setHasSyncedWithStorage, store } from '../../redux/store';
import Challenge from './Challenge';
import { setIsShowResult, setSecsLeft, setShowPopup } from './redux';

afterEach(cleanup);

describe('unit tests: Challenge', () => {
  describe('component renders', () => {
    test('component renders main content', async () => {
      store.dispatch(setHasSyncedWithStorage(true));
      store.dispatch(setIsShowResult(true));
      await new Promise((r) => setTimeout(r, 50));
      render(
        <Provider store={store}>
          <Challenge />
        </Provider>,
      );
    });
    test('component renders popup', () => {
      store.dispatch(setHasSyncedWithStorage(true));
      store.dispatch(setShowPopup({ component: <></> }));
      store.dispatch(setIsShowResult(true));
      act(() => {
        render(
          <Provider store={store}>
            <Challenge />
          </Provider>,
        );
      });
      store.dispatch(setShowPopup({}));
    });
  });
  test('results show up once time is up', async () => {
    store.dispatch(setHasSyncedWithStorage(true));
    store.dispatch(setSecsLeft(0));
    store.dispatch(setIsShowResult(true));
    await new Promise((r) => setTimeout(r, 50));
    act(() => {
      render(
        <Provider store={store}>
          <Challenge />
        </Provider>,
      );
    });
    await new Promise((r) => setTimeout(r, 1100));
    expect(screen.getByText('ACCURACY')).toBeTruthy();
  });
});
