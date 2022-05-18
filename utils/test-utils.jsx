// testing-utils.ts

import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
// Import your own reducer
import textBuilderReducer from '../views/TextBuilder/redux';
import timeBuilderReducer from '../views/TimeBuilder/redux';
import challengeReducer from '../views/Challenge/redux';
import appReducer from '../redux/store';

const testStore = configureStore({
  reducer: {
    app: appReducer,
    textBuilder: textBuilderReducer,
    timeBuilder: timeBuilderReducer,
    challenge: challengeReducer,
  },
});

function render(
  ui,
  {
    preloadedState,
    store = testStore,
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render, testStore };
