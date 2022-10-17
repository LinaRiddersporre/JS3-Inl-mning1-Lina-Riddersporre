import React from "react";

class Add extends React.Component{
    addValue = []
    sum = 0

    addValueInArray = (event) => {
        event.preventDefault();
        this.addValue.push(event.target[0].value)
        localStorage.setItem(`insättning ${this.addValue.length}`, event.target[0].value)
        console.log(this.addValue)
        this.sum = this.multipleAllAdds()
        this.forceUpdate()
    }

    multipleAllAdds = () => {
        let result = this.addValue.map(i=>Number(i))
        console.log(result)
        let sum = 0
        for(let i=0; i<result.length; i++){
            sum += result[i]
        }
        return sum
            
        
    }


    render(){
        return(
            <form onSubmit={this.addValueInArray}>
                <input type={"number"}></input>
                <button>Insättning</button>
                <h2>Total insättningssumma: {this.sum}</h2>
            </form>
        )
    }
    
}

export default Add;