import React from "react";
import PlayerCard from "./PlayerCard"; 

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
            <div className="Fetch-Players">
                {this.state.Players.map(Players => (
                <PlayerCard key={this.state.Players.id} Players={Players} />
                ))}
            </div>
            )
    }
}

export default Fetch; 