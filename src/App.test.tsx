import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Getflix test suite', () => {
  it('should display the home page', () => {
    const { getByText, getByPlaceholderText } = render(<App />);

    expect(getByText('GETFLIX')).toBeTruthy();
    expect(getByText('Welcome :)')).toBeTruthy();
    expect(getByText("What's Popular")).toBeTruthy();
    expect(getByPlaceholderText('Search for a movie...')).toBeTruthy();
  });
});
