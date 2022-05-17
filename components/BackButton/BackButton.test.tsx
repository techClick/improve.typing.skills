import React from 'react';
import { render, cleanup } from '@testing-library/react';
import BackButton from './BackButton';

afterEach(cleanup);

describe('unit test: BackButton', () => {
  test('component renders', () => {
    render(<BackButton action={() => {}} />);
  });
});
