import React from "react"; 

function PlayerCard(props) {
    return (
        <div>
            <h1> {props.Players.name}</h1>
            <p> Country: {props.Players.country} </p>
            <p> Google Searches: {props.Players.searches}</p>
        </div>
    )
}

export default PlayerCard; 