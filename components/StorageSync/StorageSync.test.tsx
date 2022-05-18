import React from 'react';
import { render, cleanup, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import StorageSync from './StorageSync';

afterEach(cleanup);

describe('unit test: StorageSync', () => {
  test('component renders', () => {
    act(() => {
      render(
        <Provider store={store}>
          <StorageSync children={null} />
        </Provider>,
      );
    });
  });
});
