import React from "react";
import Add from "./components/add/add";
import Expenditure from "./components/expenditure/expenditure";


class App extends React.Component {

  totalIncome = localStorage.getItem('totalIncome') ? parseInt(localStorage.getItem('totalIncome')) : 0;
  totalExpenditure = localStorage.getItem('totalExpenditure') ? parseInt(localStorage.getItem('totalExpenditure')) : 0;
  saldo = localStorage.getItem('saldo') ? parseInt(localStorage.getItem('saldo')) : 0;
  array = new Map(localStorage.myMap ? JSON.parse(localStorage.myMap) : null)

  getTransaction = (transaction) => {
    if (transaction.isIncome) {
      this.saldo = this.saldo + transaction.value
      localStorage.setItem('saldo', this.saldo)
      this.totalIncome = this.totalIncome + transaction.value
      localStorage.setItem('totalIncome', this.totalIncome)
    } else {
      if (this.array.has(transaction.name)) {
        alert('finns')
      } else {
        if (transaction.price > this.saldo) {
          alert('Pengar slut, ge nu')
        } else {
          this.saldo = this.saldo - transaction.price
          localStorage.setItem('saldo', this.saldo)
          this.totalExpenditure = this.totalExpenditure + transaction.price
          localStorage.setItem('totalExpenditure', this.totalExpenditure)
          this.array.set(transaction.name, transaction)
          localStorage.myMap = JSON.stringify(Array.from(this.array))
        }
      }
    }
    window.location.reload()
  }


  render() {
    return (
      <div className="divBody">
        <section className="transactionSection">
          <h1>Totala insättningar: {this.totalIncome}</h1>
          <h1>Totala  utgifter: {this.totalExpenditure}</h1>
          <h1>Saldo: {this.saldo} </h1>
        </section>
        <section className="inputSection">
          <Add getTransaction={this.getTransaction} />
          <Expenditure getTransaction={this.getTransaction} />
        </section>
        <section className="expenditureSection">
          <h4>Utgifter: </h4>
          {[...this.array].map((value, index) => {
            return (
              <div key={index} className='itemSection'>
                <h3>{value[1].name}</h3>
                <h3>{value[1].price}</h3>
              </div>
            )
          })}
        </section>
        
      </div>
    )
  }
}

export default App;