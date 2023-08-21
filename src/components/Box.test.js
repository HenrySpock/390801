import React from 'react';
import { render } from '@testing-library/react';
import Box from './Box';

test('renders Box without crashing', () => {
  render(<Box width="100" height="100" bgColor="red" idx={0} removeBox={() => {}} />);
});

test('matches snapshot', () => {
  const { asFragment } = render(<Box width="100" height="100" bgColor="red" idx={0} removeBox={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});
