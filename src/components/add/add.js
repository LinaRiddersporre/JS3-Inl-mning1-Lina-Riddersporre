import React from "react";

class Add extends React.Component{
    boughtItemObject = {
        value: 0,
        isIncome: true
    }
    

    getInputAmount = (event) => {
        this.boughtItemObject.value = parseInt(event.target.value)
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.props.getSavedGrocceries(this.boughtItemObject)
    }
    

    render(){
        return(
            <form onSubmit={this.onSubmitHandler}>
                <input 
                placeholder="Insättning"
                type="number"
                onChange={this.getInputAmount} />
                <input type='submit' value='submit'></input>
                
            </form>
        )
    }
    
}

export default Add;