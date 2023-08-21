import React from 'react'; 
import { render } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('renders NewBoxForm without crashing', () => {
  render(<NewBoxForm addBox={() => {}} />);
});

test('matches snapshot', () => {
  const { asFragment } = render(<NewBoxForm addBox={() => {}} />);
  expect(asFragment()).toMatchSnapshot();
});


