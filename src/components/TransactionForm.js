import React, { Component } from 'react'

class TransactionForm extends Component {
    state = {
        ...this.returnStateObject()
    }

    returnStateObject(){
        if(this.props.currentIndex == -1)
        return{
            beneficiaryName : "",
            beneficiaryAccountNumber : "",
            accountAmount : "",
            bankCode : "",
        }
        else
            return this.props.list[this.props.currentIndex]
    }
   
    componentDidUpdate(prevProps) {
        if (prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length)
            this.setState({...this.returnStateObject()})
    }

    handleInputChange = e => {
        this.setState ({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = e => {
       e.preventDefault()
       this.props.onAddOrEdit(this.state)
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit} autoComplete='off'>
        <input name ="beneficiaryAccountNumber" placeholder='account #' 
               value={this.state.beneficiaryAccountNumber} onChange={this.handleInputChange}/><br/> 
        <input name="beneficiaryName" placeholder='Name'
               value={this.state.beneficiaryName} onChange={this.handleInputChange}/><br/>
        <input name='accountAmount' placeholder='AccountAmount'
               value={this.state.accountAmount} onChange={this.handleInputChange}/> <br/>
         <input name='bankCode' placeholder='Bank-Code'
               value={this.state.bankCode} onChange={this.handleInputChange}/> <br/>
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default  TransactionForm