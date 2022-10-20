import React from "react";

class Add extends React.Component{
    transaction = {
        value: 0,
        isIncome: true
    }

    getInputAmount = (event) => {
        this.transaction.value = parseInt(event.target.value)
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.props.getTransaction(this.transaction)
    }

    render(){
        return(
            <form onSubmit={this.onSubmitHandler}>
                <input 
                placeholder="Insättning"
                type="number"
                onChange={this.getInputAmount} 
                className="incomeInput"/>
                <input type='submit' value='submit'></input>
            </form>
        )
    }
}

export default Add;