import React from "react";

class Fetch extends React.Component {
    state = {
        data: [],
    };
    componentDidMount() {
        fetch('http://localhost:5000/api/players')
        .then(res => res.json())
        .then(res => this.setState({ data: res }))
        .catch(err => console.log(err)); 
    }
}