import React, { Component } from 'react';
import Wallet from './components/Wallet';
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
            amountToSpend: 100
        }
    }

    addMoneyHandler = amt => {
        const parsed = parseInt(amt, 10)
        this.setState( prevState => ({
            amountToSpend: prevState.amountToSpend + parsed
        }))
    }
    moreClickHandler = () => {
        this.setState((prevState) => ({
            minReturnedId: prevState.minReturnedId += 4,
            maxReturnedId: prevState.maxReturnedId += 4
        }))
    }

    sushiClickHandler = sushiObj => {

        if(sushiObj.price <= this.state.amountToSpend){
            this.setState((prevState) => ({
                consumedSushis: [...this.state.consumedSushis, sushiObj],
                amountToSpend: prevState.amountToSpend - sushiObj.price
            }))
        }
        //if amount to spend is greater than sushiObj.price do the stuff 
        //need to reset the amount to spend by the sushiObj.price
      
    }

    //send back down consumed sushis to sushi. if we can find the sushi set some value to true

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
    return (
      <div className="app">
        <SushiContainer consumedSushis={this.state.consumedSushis}sushiClickHandler={this.sushiClickHandler} minReturnedId={this.state.minReturnedId} maxReturnedId={this.state.maxReturnedId} clickHandler={this.moreClickHandler}sushis={this.state.api}/>
        <Table amountToSpend={this.state.amountToSpend}consumedSushis={this.state.consumedSushis}/>
        <Wallet addMoneyHandler={this.addMoneyHandler}/>
      </div>
    );
  }
}

export default App;