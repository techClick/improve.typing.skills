import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import AnswerInput from './AnswerInput';

afterEach(cleanup);

describe('unit test: AnswerInput', () => {
  test('component renders', () => {
    render(
      <Provider store={store}>
        <AnswerInput />
      </Provider>,
    );
  });
});
