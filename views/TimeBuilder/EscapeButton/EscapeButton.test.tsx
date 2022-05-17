import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../../redux/store';
import EscapeButton from './EscapeButton';

afterEach(cleanup);

describe('unit tests: EscapeButton', () => {
  test('component renders', () => {
    render(
      <Provider store={store}>
        <EscapeButton setShowPopup={() => {}} />
      </Provider>,
    );
  });
});
