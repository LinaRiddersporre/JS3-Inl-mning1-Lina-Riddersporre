import React from "react";

class Expenditure extends React.Component{
    prices = 0;
    moneyFromAccount = 0;
    boughtItemObject = {
        name: '',
        price: 0
      }
    
    getBillAmount = (e) => {
        this.prices = parseInt(e.target.value)
        console.log(this.prices)
    }

    boughtItems = (e) => {
        this.boughtItemObject.name = e.target[0].value
        this.boughtItemObject.price = e.target[1].value
        console.log(this.boughtItemObject.name)
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.moneyFromAccount = this.moneyFromAccount + this.prices
        console.log(this.moneyFromAccount)
        this.boughtItems(e)
        this.props.getTotalBill(this.moneyFromAccount)
        this.props.getSavedGrocceries(this.boughtItemObject)
        
    }

    render(){
    
        return(
            <form onSubmit={this.onSubmitHandler}>
                <input type='text' placeholder="Vilken artikel?" ></input>
                <input type='number' placeholder="Vilken kostnad?" onChange={this.getBillAmount}></input>
                <input type='submit' value='submit'/>
                
            </form>
        )
    }
}

export default Expenditure;