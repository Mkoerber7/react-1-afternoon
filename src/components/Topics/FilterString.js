import React, { Component } from 'react';

class FilterStrings extends Component {
    constructor() {
        super();

        this.state = {
        nyKnicks: [
            "Unicorn", "Beaz", "Jack", "Kanter",
            "Frank", "Trey", "Ron", "Doug"
        ],
    
        userInput: " ",
        filteredArray: []
       };
    }
        
    updateInput(val) {
        console.log("Works")
        this.setState({userInput: val});
    }

     updateNyKnicks(userInput) {
        let nyKnicks = this.state.nyKnicks;
        let filteredArray = [];
        console.log("works")

        for(var i =0;i<nyKnicks.length;i++){
            if (nyKnicks[i].includes(userInput) ) {
                filteredArray.push(nyKnicks[i]);
            }
        }
        this.setState({filteredArray: filteredArray});
    }
    

    render() {
      return (
        <div className="puzzleBox filterStringPB">
          <h4>Filter String</h4>
          <span className="puzzleText">Names: { JSON.stringify(this.state.nyKnicks, null, 10) }</span>
          <input className="inputLine" onChange={ (e) => this.updateInput(e.target.value)}></input>
          <button className="confirmationButton" onClick={ () => this.updateNyKnicks(this.state.userInput)}> Filter </button>
          <span className="resultsBox filterStringPB">Filtered: { JSON.stringify(this.state.filteredArray, null, 10) }</span>
        </div>
      )
    }
  }
  
export default FilterStrings;