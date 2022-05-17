import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import TimeBuilderPage from '../../pages/timebuilder';

afterEach(cleanup);

describe('unit test: pages/timebuilder', () => {
  test('component renders', () => {
    render(
      <Provider store={store}>
        <TimeBuilderPage />
      </Provider>,
    );
  });
});
