import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import CustomBuilder from './CustomBuilder';

afterEach(cleanup);

describe('unit test: CustomBuilder', () => {
  test('component renders', () => {
    render(
      <Provider store={store}>
        <CustomBuilder />
      </Provider>,
    );
  });
});
