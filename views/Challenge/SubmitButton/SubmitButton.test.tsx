import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import SubmitButton from './SubmitButton';

afterEach(cleanup);

describe('unit test: SubmitButton', () => {
  test('component renders', () => {
    render(
      <Provider store={store}>
        <SubmitButton />
      </Provider>,
    );
  });
});
