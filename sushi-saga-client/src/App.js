import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
    constructor(){
        super()
        this.state = {
            api: [],
            minReturnedId: 1,
            maxReturnedId: 4
        }
    }
    moreClickHandler = () => {
        this.setState((prevState) => ({
            minReturnedId: prevState.minReturnedId += 4,
            maxReturnedId: prevState.maxReturnedId += 4
        }))
    }
    //set a max and min value and increment on every fetch request
    //then filter through the array where api objects returned are between those two numbers
    componentDidMount(){
        fetch(API)
        .then(resp => resp.json())
        .then(sushis => {
            this.setState({api: sushis})
        })
    }

    

  render() {
    return (
      <div className="app">
        <SushiContainer minReturnedId={this.state.minReturnedId} maxReturnedId={this.state.maxReturnedId} clickHandler={this.moreClickHandler}sushis={this.state.api}/>
        <Table />
      </div>
    );
  }
}

export default App;