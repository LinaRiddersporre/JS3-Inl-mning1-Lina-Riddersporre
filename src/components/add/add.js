import React from "react";

class Add extends React.Component{
    addValue = 0;
    moneyToAccount = 0;

    getInputAmount = (event) => {
        this.addValue = parseInt(event.target.value)
        console.log(this.addValue)
    }

    onSubmitHandler = (e) => {
        e.preventDefault()
        this.moneyToAccount = this.moneyToAccount + this.addValue
        this.props.getAddResult(this.moneyToAccount)
    }
    

    render(){
        return(
            <form onSubmit={this.onSubmitHandler}>
                {console.log(this.props)}

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