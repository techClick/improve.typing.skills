import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import Challenge from '../../pages/challenge';

// import configureStore from 'redux-mock-store';

afterEach(cleanup);

describe('unit test: pages/challenge', () => {
  test('component renders', () => {
    render(
      <Provider store={store}>
        <Challenge />
      </Provider>,
    );
  });
});
