import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setHasSynced, store } from '../../redux/store';
import Challenge from './Challenge';
import { setIsShowResult, setSecsLeft } from './redux';

afterEach(cleanup);

describe('unit test: Challenge', () => {
  test('component renders', () => {
    render(
      <Provider store={store}>
        <Challenge />
      </Provider>,
    );
  });
  test('results show up once time is up', async () => {
    store.dispatch(setHasSynced(true));
    store.dispatch(setSecsLeft(0));
    store.dispatch(setIsShowResult(true));
    await new Promise((r) => setTimeout(r, 50));
    const { getByText } = render(
      <Provider store={store}>
        <Challenge />
      </Provider>,
    );
    await new Promise((r) => setTimeout(r, 1100));
    expect(getByText('ACCURACY')).toBeTruthy();
  });
});
