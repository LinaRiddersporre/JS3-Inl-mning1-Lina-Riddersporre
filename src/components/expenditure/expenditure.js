import React from "react";

class Expenditure extends React.Component{
    
    transaction = {
        name: '',
        price: 0,
        isIncome: false
      }
    
    setTransactionValues = (e) => {
        this.transaction.name = e.target[0].value
        this.transaction.price = parseInt(e.target[1].value)
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.setTransactionValues(e)
        this.props.getTransaction(this.transaction)
    }

    render(){
        return(
            <form onSubmit={this.onSubmitHandler}>
                <input type='text' placeholder="Vilken artikel?" ></input>
                <input type='number' placeholder="Vilken kostnad?"></input>
                <input type='submit' value='submit'/>
            </form>
        )
    }
}

export default Expenditure;