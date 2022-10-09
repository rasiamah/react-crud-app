import React, { Component } from 'react'
import TransactionForm from './TransactionForm'

class TransactionList extends Component {
  state = {
    currentIndex:-1,
    list:this.returnlist ()
  }

  // check and see if database is empty
  // if it is, initialize it with an empty array to await input
  // JSON.stringify converts the jason object intoa string since
  // we cant store json objects to loacl storage and then parse it with 
  // JSON Parse to retrieve the data ina jason format.

  returnlist () {
    if  (localStorage.getItem('transactions') == null)
        localStorage.setItem('transactions', JSON.stringify([]))
    return JSON.parse(localStorage.getItem('transactions'))
  }

  onAddOrEdit = (data) => {
    var list = this.returnlist()
    list.push(data)
    localStorage.setItem('transactions', JSON.stringify(list))
    this.setState({list})
  }

  handleEdit = index => {
    this.setState({
      currentIndex:index
    })
  }



  render() {
    return (
      <div>
        <TransactionForm
          onAddOrEdit={this.onAddOrEdit}
          currentIndex={this.state.currentIndex}
          list = {this.state.list}
        />
        <hr />
        <table>
          <tbody>
            {
              this.state.list.map((item,index) => {
                return <><tr key={index} />
                <td>{item.beneficiaryName}</td>
                <td>{item.accountAmount}</td>
                <td>{item.beneficiaryAccountNumber}</td>
                <td><button onClick={() => this.handleEdit(index)}>Edit</button></td>
                </>
              }) 
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default TransactionList