import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import NextButton from './NextButton';

afterEach(cleanup);

describe('unit test: NextButton', () => {
  test('component renders', () => {
    render(
      <Provider store={store}>
        <NextButton />
      </Provider>,
    );
  });
});
