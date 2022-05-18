import React from 'react';
import { render, cleanup, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setHasSyncedWithStorage, store } from '../../redux/store';
import Challenge from './Challenge';
import { setIsShowResult, setShowPopup } from './redux';

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
});
