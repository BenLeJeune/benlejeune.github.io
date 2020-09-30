import React from 'react';
import { render } from '@testing-library/react';
import Viewport from './Viewport';

test('renders learn react link', () => {
  const { getByText } = render(<Viewport />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
