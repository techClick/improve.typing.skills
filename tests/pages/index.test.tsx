import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import IndexPages from '../../pages';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

afterEach(cleanup);

describe('unit test: pages/index', () => {
  test('component renders', () => {
    useRouter.mockImplementationOnce(() => ({
      query: {},
    }));
    render(
      <Provider store={store}>
        <IndexPages />
      </Provider>,
    );
  });
});
