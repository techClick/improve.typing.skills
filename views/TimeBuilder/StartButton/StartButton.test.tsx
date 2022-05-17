import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import StartButton from './StartButton';

afterEach(cleanup);

describe('unit test: StartButton', () => {
  test('component renders', () => {
    render(
      <Provider store={store}>
        <StartButton />
      </Provider>,
    );
  });
});
