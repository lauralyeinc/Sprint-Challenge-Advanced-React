import React from 'react';
import { render } from "@testing-library/react"; 

import PlayerCard from "./PlayerCard"; 
import Fetch from "./Fetch"; 


test('renders PlayingCard.js without crashing', () => {
    render(<PlayerCard />)
});

test('renders Fetch.js without crashing', () =>{
    render(<Fetch />)
})

test('returns "hello world', () => {
    expect(helloWorld()).toBe("hello world");
    expect(helloWorld()).not.toBe(""); 
})

test('has "darkmodetogglesetup"', () => {
    const container = render(<App />);
    container.getByTestId("darkmodetogglesetup"); 
})

