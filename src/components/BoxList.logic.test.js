import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';
import NewBoxForm from './NewBoxForm';

test('can add a new box', () => {
  const { getByLabelText, getByText } = render(<BoxList />);
  
  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const bgColorInput = getByLabelText('Background Color:');

  fireEvent.change(widthInput, { target: { value: '100' } });
  fireEvent.change(heightInput, { target: { value: '100' } });
  fireEvent.change(bgColorInput, { target: { value: 'red' } });

  const addButton = getByText('Add Box');
  fireEvent.click(addButton);

  expect(getByText('X')).toBeInTheDocument();
});

test('can delete a box', () => {
  const { getByLabelText, getByText, queryByText } = render(<BoxList />);
 
  const widthInput = getByLabelText('Width:');
  const heightInput = getByLabelText('Height:');
  const bgColorInput = getByLabelText('Background Color:');

  fireEvent.change(widthInput, { target: { value: '100' } });
  fireEvent.change(heightInput, { target: { value: '100' } });
  fireEvent.change(bgColorInput, { target: { value: 'red' } });

  const addButton = getByText('Add Box');
  fireEvent.click(addButton);
 
  const deleteButton = getByText('X');
  expect(deleteButton).toBeInTheDocument();
 
  fireEvent.click(deleteButton);
 
  expect(queryByText('X')).not.toBeInTheDocument();
});

test('can fill out a form', () => {
  const { getByLabelText } = render(<NewBoxForm addBox={() => {}} />);
  
  const widthInput = getByLabelText('Width:');
  fireEvent.change(widthInput, { target: { value: '200' } });
  expect(widthInput.value).toEqual('200');
});