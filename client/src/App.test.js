
import App from "./App.js"; 
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react'; 



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// test('App renders without crashing', () => {
//   render(<App />); 
// }); 

test('should be true', () => {
  expect(true).toBe(true); 
});

test('it has "darkmodetogglesetup" in Nav.js in toggle set up', () => {
  const container = render(<App />);
  container.getByTestId("darkmodetogglesetup");
})

test('renders players state', async () => {
  const { findByText } = await render(<App />);
  findByText(/Ellen White/i);
})










