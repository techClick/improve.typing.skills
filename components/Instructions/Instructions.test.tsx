import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Instructions from './Instructions';

afterEach(cleanup);

describe('unit test: Instructions', () => {
  test('components renders', () => {
    render(<Instructions instructions={<>Test</>} />);
  });
});
