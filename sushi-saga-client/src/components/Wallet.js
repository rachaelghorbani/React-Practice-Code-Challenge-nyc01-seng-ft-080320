import React from 'react'

class Wallet extends React.Component {
    state ={
        amount: ''
    }

    localClickHandler = (e) => {
            this.setState({
                [e.target.name]: e.target.value 
            })
    }

    localSubmitHandler = (e) => {
        e.preventDefault()
        this.props.addMoneyHandler(this.state.amount)
        this.setState({
            amount: ''
        })
    }
    render(){
        return (
            <div>
                <form onSubmit={this.localSubmitHandler}>
                    <label>Add Money!</label>
                    <br />
                    <input type="number" name="amount" value={this.state.amount} onChange={this.localClickHandler}/>
                    <br />
                    <input type="submit" value = "Add Money!!"/>
                    <br />
                </form>
            </div>
        )
    }
}

export default Wallet