import React from "react";

class Expenditure extends React.Component{
    priser = []
    uttag = this.props.allResults.moneyFromAccount
    boughtItemsArray = []
    boughtItems = this.props.allResults.boughtItems

    saveInLocalStorage = (event) => {
        event.preventDefault();
        
        let expenditureArray = event.target[1].value
        expenditureArray = Number(expenditureArray)
        this.priser.push(expenditureArray)
        localStorage.setItem('priser', JSON.stringify(this.priser))
        this.uttag = this.uttag + expenditureArray

        let itemName = event.target[0].value
        this.boughtItemsArray.push(itemName)
        localStorage.setItem('boughtItems', JSON.stringify(this.boughtItemsArray))

        

        

        
        
        this.forceUpdate()
    }

    

    render(){
    
        return(
            <form onSubmit={this.saveInLocalStorage}>
                <input type={'text'} ></input>
                <input type={'number'}></input>
                <button>uttag</button>
                <div>
                    <h1>Totala köp: {this.uttag} </h1>
                    <h1>artikel: {this.nextTry}</h1>
                </div>
            </form>
        )
    }
}

export default Expenditure;