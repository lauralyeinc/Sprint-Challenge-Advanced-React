import React from "react";
import PlayerCard from "./PlayerCard"; 
import styled from "styled-components"; 

class Fetch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        Players: [],
    };
    }

    componentDidMount() {
        fetch("http://localhost:5000/api/players")
        .then(response => response.json())
        .then(response =>{
            console.log("Fetch.js: componentDidMount fetch response", response);
            this.setState({
                Players: response  
            });
        })
        .catch(error => {
            console.log("Fetch.js: componentDidMount fetch Error", error);
        }); 
    }
    render() {
        return (
            <Div className="Fetch-Players">
                {this.state.Players.map(Players => (
                <PlayerCard key={this.state.Players.id} Players={Players} />
                ))}
            </Div>
            )
    }
}

export default Fetch; 


const Div = styled.div`
display: flex;
flex-flow: wrap;
width: 80%; 
margin: 0 auto;
justify-content: center;
align-items: center;
`