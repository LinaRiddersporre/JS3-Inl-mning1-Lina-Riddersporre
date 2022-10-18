import React from "react";

class Expenditure extends React.Component{
    prices = 0;
    moneyFromAccount = 0;
    boughtItemsArray = []
    
    getBillAmount = (e) => {
        this.prices = parseInt(e.target.value)
        console.log(this.prices)
    }

    getBoughtGrocceries = (e) => {
        let theGrosserie = e.target.firstChild.value
        console.log(e.target.firstChild.value)
        this.boughtItemsArray.push(theGrosserie)
        console.log(this.boughtItemsArray)
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.moneyFromAccount = this.moneyFromAccount + this.prices
        console.log(this.moneyFromAccount)
        this.props.getTotalBill(this.moneyFromAccount)
        this.getBoughtGrocceries(e)
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