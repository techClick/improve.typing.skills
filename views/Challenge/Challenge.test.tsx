import React from 'react';
import { render, cleanup, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setHasSyncedWithStorage, store } from '../../redux/store';
import Challenge from './Challenge';
import { setIsShowResult, setSecsLeft, setShowPopup } from './redux';

afterEach(cleanup);

describe('unit tests: Challenge', () => {
  describe('component renders', () => {
    test('component renders main body', () => {
      store.dispatch(setHasSyncedWithStorage(true));
      store.dispatch(setIsShowResult(true));
      act(() => {
        render(
          <Provider store={store}>
            <Challenge />
          </Provider>,
        );
      });
      // remove this
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
      // remove this
    });
  });
  test('results show up once time is up', async () => {
    store.dispatch(setHasSyncedWithStorage(true));
    store.dispatch(setSecsLeft(0));
    store.dispatch(setIsShowResult(true));
    let getByText: any;
    await new Promise((r) => setTimeout(r, 50));
    await act(() => {
      ({ getByText } = render(
        <Provider store={store}>
          <Challenge />
        </Provider>,
      ));
    });
    await new Promise((r) => setTimeout(r, 1100));
    expect(getByText('ACCURACY')).toBeTruthy();
  });
});
