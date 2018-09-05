import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: '',
      rate: '',
      term: '15',
      output: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.calculateMortgage = this.calculateMortgage.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  calculateMortgage(event) {
    event.preventDefault();
    const term = parseFloat(this.state.term) * 12;
    const rate = (parseFloat(this.state.rate) / 100) / 12;
    const balance = parseFloat(this.state.balance);
    let mortgage = balance * (rate * ((1 + rate) ** term)) / (((1 + rate) ** term) - 1);
    this.setState({
      output: '$' + mortgage.toFixed(2) + ' is your payment.'
    });
  }

  render() {
    return (
      <div className='container-fluid'>
        <form className='form-horizontal'>
          <div className='form-group'>
            <div className='col-sm-2'></div>
            <div className='col-sm-4'>
              <h3>Mortgage Calculator</h3>
              <hr></hr>
            </div>
          </div>
          <div className='form-group'>
            <label className='col-sm-2 control-label'>Loan Balance</label>
            <div className='col-sm-4'>
              <input name='balance' type='number' className='form-control' id='idLoanBalance' placeholder='0'
                value={this.state.balance} onChange={this.handleChange}></input>
            </div>
          </div>
          <div className='form-group'>
            <label className='col-sm-2 control-label'>Interest Rate (%)</label>
            <div className='col-sm-4'>
              <input name='rate' type='number' className='form-control' id='idInterestRate' step='0.01' placeholder='0'
                value={this.state.rate} onChange={this.handleChange}></input>
            </div>
          </div>
          <div className='form-group'>
            <label className='col-sm-2 control-label'>Loan Term (years)</label>
            <div className='col-sm-4'>
              <select name='term' id='idLoanTerm' className='form-control' value={this.state.term} onChange={this.handleChange}>
                <option value='15'>15</option>
                <option value='30'>30</option>
              </select>
            </div>
          </div>
          <div className='form-group'>
            <div className='col-sm-2'></div>
            <div className='col-sm-2'>
              <button type='submit' className='btn btn-primary' name='submit' onClick={this.calculateMortgage}>Calculate</button>
            </div>
            <div id='output' name='output' className='col-sm-2' value='{this.state.output}'>
              <h5>{this.state.output}</h5>
            </div>
          </div>
        </form>
      </div >
    );
  }
}