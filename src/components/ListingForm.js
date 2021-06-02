import React from "react";
import './Listing.css'
import axios from 'axios'


class ListingForm extends React.Component {


//   axios = require('axios')

//    res = () => {
//    axios.post('http://localhost:9292/Aupair', {
//     image: this.state.image,
//     name: this.state.name,
//     age: this.state.age,
//     nationality: this.state.nationality,
//     certificates: this.state.certificates,
//     years_of_experience: this.state.years_of_experience
//   }).then(function (response) {
//     console.log(response);
//   })
// }

  // handleName = (event) => {
  //   this.setState({
  //     name: event.target.value,
  //   });
  // };
  // handleImage = (event) => {
  //   this.setState({
  //     image: event.target.value,
  //   });
  // };

  // handleAge = (event) =>{
  //   this.setState({
  //     aupairName: event.target.value
  //   })
  // }

  // handleNationality = (event) =>{
  //   this.setState({
  //     startDate: event.target.value
  //   })
  // }
  
  // handleCertificate = (event) =>{
  //   this.setState({
  //     salary: event.target.value
  //   })
  // }


  render() {
    return (
        <form onSubmit={this.newValue}>
		<div className="form-inner">
          <h2>Create a Listing!</h2>
		  <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Enter your fullname..."
            className="input-text"
            value={this.state.name}
            onChange={this.handleName}
          />
          <br />
          <input
            type="text"
            name="age"
            placeholder="Enter Aupair's fullname..."
            className="input-text"
            value={this.state.age}
            onChange={this.handleAge}
          />
          <br />
		  <input
            type="text"
            name="certificates"
            placeholder="Enter salary offer..."
            className="input-text"
            value={this.state.certificates}
            onChange={this.handleCertificate}
          />
          <br />
		  <input
            type="text"
            name="experience"
            placeholder="Enter desired start date..."
            className="input-text"
            value={this.state.years_of_experience}
            onChange={this.handleExperience}
          />
          <br />
		  <input
            type="text"
            name="image"
            placeholder="Upload a picture..."
            className="input-text"
            value={this.state.image}
            onChange={this.handleImage}
          />
          <br />
          <input
            type="submit"
            name="submit"
            value="Create New Listing"
            className="submit"
            onClick={()=> this.props.addListing}
          />
		  </div>
		  </div>
        </form>

    );
  }
}

export default ListingForm;