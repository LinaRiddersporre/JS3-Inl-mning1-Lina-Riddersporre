import React from "react";
import Add from "./components/add/add";
import Expenditure from "./components/expenditure/expenditure";


class App extends React.Component{
  
  moneyToAccount = 0;
  moneyFromAccount = 0;
  boughtArticle = [];

    

  getAddResult = (moneyToAccount) => {
    console.log(moneyToAccount)
    if(localStorage.getItem('moneyToAccount')){
      localStorage.setItem('moneyToAccount', parseInt(localStorage.getItem('moneyToAccount')) + moneyToAccount)
    }else{
      localStorage.setItem('moneyToAccount', moneyToAccount)
    }
    window.location.reload()
  }

  getTotalBill = (moneyFromAccount) => {
    if(localStorage.getItem('moneyFromAccount')){
      localStorage.setItem('moneyFromAccount', parseInt(localStorage.getItem('moneyFromAccount')) + moneyFromAccount)
    }else{
      localStorage.setItem('moneyFromAccount', moneyFromAccount)
    }
    window.location.reload()
  }

  saveArticles = (boughtArticle) => {
    if(localStorage.getItem('boughtArticle')){
      localStorage.setItem('boughtArticle', localStorage.getItem('boughtArticle') + boughtArticle) 
    }else{localStorage.setItem('boughtArticle', boughtArticle)}
 }
  render(){
    const showMoneyToAccount = localStorage.getItem('moneyToAccount') ? localStorage.getItem('moneyToAccount') : 0;
    const showTotalBill = localStorage.getItem('moneyFromAccount') ? localStorage.getItem('moneyFromAccount') : 0;
    return(
      <div className="divBody">
        <h1>Totala insättningar: {showMoneyToAccount}</h1>
        <h1>Totala  utgifter: {showTotalBill}</h1>
        <Add hello='hello' getAddResult={this.getAddResult}/>
        <Expenditure getTotalBill={this.getTotalBill}/>
      
      </div>
    )
  }
}

export default App;