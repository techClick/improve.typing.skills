import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import TimeOptions from './TimeOptions';

afterEach(cleanup);

describe('unit test: TimeOptions', () => {
  test('component renders', () => {
    render(
      <Provider store={store}>
        <TimeOptions />
      </Provider>,
    );
  });
});
