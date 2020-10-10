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
            maxReturnedId: 4,
            consumedSushis: [],
        }
    }
    moreClickHandler = () => {
        this.setState((prevState) => ({
            minReturnedId: prevState.minReturnedId += 4,
            maxReturnedId: prevState.maxReturnedId += 4
        }))
    }

    sushiClickHandler = sushiObj => {
        this.setState({
            consumedSushis: [...this.state.consumedSushis, sushiObj],
        })
    }

    /* onclick
    1. trigger something as false so that we don't render the sushi image in sushi.js
    2.take the amount of the sushi (will need to send up the sushi obj then and create a consumedSushi obj in app that houses all the consumed sushi also so we can send donw the arry to table) and add it to a total sushi amount in state in app
    3. this amount will need to be sent down to table as props so we can subtract it from the total amount remaining
    4. will need to render one plate for each sushi thats clicked
*/

    componentDidMount(){
        fetch(API)
        .then(resp => resp.json())
        .then(sushis => {
            this.setState({api: sushis})
        })
    }

  
    

  render() {
      console.log(this.state)
    return (
      <div className="app">
        <SushiContainer sushiClickHandler={this.sushiClickHandler} minReturnedId={this.state.minReturnedId} maxReturnedId={this.state.maxReturnedId} clickHandler={this.moreClickHandler}sushis={this.state.api}/>
        <Table consumedSushis={this.state.consumedSushis}/>
      </div>
    );
  }
}

export default App;