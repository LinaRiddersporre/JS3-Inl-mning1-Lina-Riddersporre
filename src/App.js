import React from "react";
import Add from "./components/add/add";
import Expenditure from "./components/expenditure/expenditure";



class App extends React.Component{
  allResults = {
    moneyToAccount: '',
    moneyFromAccount: 0,
    saldo: '',
    boughtItems: '',
    
  }



  result = () => {
    for(let i = 1; i <= localStorage.length; i++){
      {localStorage.getItem(`insättning ${i}`)}
    }
  }

  render(){
    return(
      <div className="divBody">
        
        <Add/>
        <Expenditure allResults = {this.allResults}/>
        {console.log(localStorage.getItem('value'))}
        <h1>hej {this.result()}</h1>
      
      </div>
    )
  }
}

export default App;