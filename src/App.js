import React from "react";
import Add from "./components/add/add";
import Expenditure from "./components/expenditure/expenditure";


class App extends React.Component{
  
  moneyToAccount = 0;
  moneyFromAccount = 0;
  saldo = localStorage.getItem('saldo') ? parseInt( localStorage.getItem('saldo')) : 0;
  
  array = new Map(localStorage.myMap ? JSON.parse(localStorage.myMap):null)
  

  // getAddResult = (moneyToAccount) => {
  //   console.log(moneyToAccount)
  //   if(localStorage.getItem('moneyToAccount')){
  //     localStorage.setItem('moneyToAccount', parseInt(localStorage.getItem('moneyToAccount')) + moneyToAccount)
  //   }else{
  //     localStorage.setItem('moneyToAccount', moneyToAccount)
  //   }
  //   // window.location.reload()
  // }



  getTotalBill = (moneyFromAccount) => {
    if(localStorage.getItem('moneyFromAccount')){
      localStorage.setItem('moneyFromAccount', parseInt(localStorage.getItem('moneyFromAccount')) + moneyFromAccount)
      
    }else{
      localStorage.setItem('moneyFromAccount', moneyFromAccount)
    }
    window.location.reload()
  }

  getSavedGrocceries = (boughtItemObject) => {
    if(boughtItemObject.isIncome){
      this.saldo = this.saldo + boughtItemObject.value
      localStorage.setItem('saldo', this.saldo)
    }else{
      if(this.array.has(boughtItemObject.name)){
        alert('finns')
      }else{
        if(boughtItemObject.price > this.saldo){
          alert('Pengar slut, ge nu')
        }else{
          this.saldo = this.saldo - boughtItemObject.price
          localStorage.setItem('saldo', this.saldo)
          this.array.set(boughtItemObject.name, boughtItemObject)
          localStorage.myMap = JSON.stringify(Array.from(this.array))
        }
      }
    }
    window.location.reload()
  }
    
 
  render(){
    const showMoneyToAccount = localStorage.getItem('moneyToAccount') ? localStorage.getItem('moneyToAccount') : 0;
    const showTotalBill = localStorage.getItem('moneyFromAccount') ? localStorage.getItem('moneyFromAccount') : 0;
    return(
      <div className="divBody">
        <h1>Totala insättningar: {showMoneyToAccount}</h1>
        <h1>Totala  utgifter: {showTotalBill}</h1>
        <h1>Saldo: {Number.parseInt( this.saldo)} </h1>
        <h4>Köpta artiklar: </h4>
        {[...this.array].map((value, index) => {
          return(
            <div key={index}>
              <h4>{value[1].name}</h4>
              <h4>{value[1].price}</h4> 
            </div>
          )
        })}
        
        <Add getSavedGrocceries={this.getSavedGrocceries}/>
        <Expenditure getTotalBill={this.getTotalBill} getSavedGrocceries={this.getSavedGrocceries} />
      </div>
    )
  }
}

export default App;