import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import TimeBuilder from './TimeBuilder';

afterEach(cleanup);

describe('unit test: TimeBuilder', () => {
  test('component renders', () => {
    render(
      <Provider store={store}>
        <TimeBuilder />
      </Provider>,
    );
  });
});
