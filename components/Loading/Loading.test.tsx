import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Loading from './Loading';

afterEach(cleanup);

describe('unit test: Loading', () => {
  test('component renders', () => {
    render(<Loading />);
  });
});
