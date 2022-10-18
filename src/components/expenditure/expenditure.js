import React from "react";

class Expenditure extends React.Component{
    prices = 0;
    moneyFromAccount = 0;
    boughtArticle = [];
    
    getBillAmount = (e) => {
        this.prices = parseInt(e.target.value)
        console.log(this.prices)
    }

    getBoughtArticle = (e) => {
        console.log(e.target.value)
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.moneyFromAccount = this.moneyFromAccount + this.prices
        console.log(this.moneyFromAccount)
        this.props.getTotalBill(this.moneyFromAccount)
    }

    render(){
    
        return(
            <form onSubmit={this.onSubmitHandler}>
                <input type='text' placeholder="Vilken artikel?" onChange={this.getBoughtArticle}></input>
                <input type='number' placeholder="Vilken kostnad?" onChange={this.getBillAmount}></input>
                <input type='submit' value='submit'/>
                
            </form>
        )
    }
}

export default Expenditure;