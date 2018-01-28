import React, { Component } from 'react';

class Sum extends Component {
  constructor() {
    super();

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  };

  handleChange(val) {
    this.setState({ number1: val });
  };

  handleChange2(val) {
    this.setState({ number2: val });
  };

  sumItUp(number1,number2) {
   number1 = parseInt(number1);
   number2 = parseInt(number2);
   this.setState({sum: (number1 + number2) });
   console.log("works")
  };

    render() {
      return (
        <div className="puzzleBox sumPB">
          <h4>Sum</h4>
          <input className="inputLine" onChange={(e) => this.handleChange(e.target.value) }></input>
          <input className="inputLine" onChange={(e) => this.handleChange2(e.target.value) }></input>
          <button className="confirmationButton" onClick={() => this.sumItUp(this.state.number1, this.state.number2)}>Sum</button>
          <span className="resultsBox">Sum: {this.state.sum}</span>
        </div>
      )
    }
  }
  
export default Sum;