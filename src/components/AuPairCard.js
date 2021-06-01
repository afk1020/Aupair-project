import React, { Component } from 'react';

class AuPairCard extends Component {

    render() {
    return (
      <div className="aupair-card" id={this.props.auPair.id}>
        <h2>{this.props.auPair.name}</h2>
        <p>Age: {this.props.auPair.age} </p>
        <p>Years of Experience:{this.props.auPair.years_of_experience}  </p>
        <p>Nationality:{this.props.auPair.nationality} </p>
      </div>
    );
  }

}

export default AuPairCard;