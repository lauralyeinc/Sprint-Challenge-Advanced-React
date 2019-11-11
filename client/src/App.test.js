// import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { render }  from "@test-library/react"; 

test ('renders without crashing', () => {
  render(<App />)
});

test('should be true', () => {
  expect(true).toBe(true); 
}); 

test('contains header and toggle', () => {
  const { getByText } = render(<App />);
  getByText(/ Womens World Cup Players/i);
}); 
