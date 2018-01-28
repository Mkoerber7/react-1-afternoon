import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super();
        this.state = {
          peoples: [
            {Name: "Mike", Ball_Team: "Knicks", Age: 26}, 
            {Name: "Zach", Hockey_Team: "Rangers"}, 
            {Name: "Nakaash", Age: 24}
          ],

          userInput: '',
          filteredEmployees: []
        }
    }

    handleChange(val) {
        this.setState({ userInput: val });
      }
    
      filterEmployees(prop) {
        var peoples = this.state.peoples;
        var filteredEmployees = [];
        
        for ( var i = 0; i < peoples.length; i++ ) {
          if ( peoples[i].hasOwnProperty(prop) ) {
            filteredEmployees.push(peoples[i]);
          }
        }
    
        this.setState({ filteredEmployees: filteredEmployees });
      }

    render() {
      return (
        <div className="puzzleBox filterObjectPB">
          <h4> Filter Object </h4>
          <span className="puzzleText"> Original: { JSON.stringify(this.state.peoples, null, 10) }</span>
          <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value) }></input>
          <button className="confirmationButton" onClick={ () => this.filterEmployees(this.state.userInput) }>Filter</button>
          <span className="resultsBox filterObjectRB">Filtered: { JSON.stringify(this.state.filteredEmployees, null, 10) }</span>
        </div>  
      )
    }
  }
  
export default FilterObject;