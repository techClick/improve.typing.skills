import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import TextInput from './TextInput';

afterEach(cleanup);

describe('unit test: TextInput', () => {
  test('component renders', () => {
    render(
      <Provider store={store}>
        <TextInput />
      </Provider>,
    );
  });
});
