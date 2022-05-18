import React from 'react';
import { render, cleanup, act } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import ScoreBoard from './ScoreBoard';

afterEach(cleanup);

describe('unit test: ScoreBoard', () => {
  test('component renders', () => {
    act(() => {
      render(
        <Provider store={store}>
          <ScoreBoard />
        </Provider>,
      );
    });
  });
});
