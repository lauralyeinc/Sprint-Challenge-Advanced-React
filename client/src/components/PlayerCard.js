import React from "react"; 
import styled from "styled-components"; 

function PlayerCard(props) {
    return (
        <Div className="Each-Player">
            <h1> {props.Players.name}</h1>
            <p> Country: {props.Players.country} </p>
            <p> Google Searches: {props.Players.searches}</p>
        </Div>
    )
}

export default PlayerCard; 

const Div = styled.div`
padding: 1.5rem; 
`