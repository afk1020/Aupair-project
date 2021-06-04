import React from "react";
import './Listing.css'
import axios from 'axios'


class ListingForm extends React.Component {
  state = {
    image: "",
    fullname: "",
    aupair_name: "",
    salary: "",
    start: "",
    number_of_children: ""
  };
  newValue = (event) => {
    event.preventDefault();
    this.props.addListing(this.state)
    this.setState({image: '', fullname: '', salary: '', start: '', number_of_children: '', aupair_name: ''})
    
  };

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

  handleName = (event) => {
    this.setState({
      fullname: event.target.value,
    });
  };
  handleImage = (event) => {
    this.setState({
      image: event.target.value,
    });
  };

  handleAge = (event) =>{
    this.setState({
      aupair_name: event.target.value
    })
  }

  handleChildren = (event) =>{
    this.setState({
      number_of_children: event.target.value
    })
  }
  
  handleCertificate = (event) =>{
    this.setState({
      salary: event.target.value
    })
  }
  
  handleExperience = (event) =>{
    this.setState({
      start: event.target.value
    })
  }

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
            value={this.state.fullname}
            onChange={this.handleName}
          />
          <br />
          <input
            type="text"
            name="aupair_name"
            placeholder="Enter Aupair's fullname..."
            className="input-text"
            value={this.state.aupair_name}
            onChange={this.handleAge}
          />
          <br />
		  <input
            type="text"
            name="certificates"
            placeholder="Enter salary offer..."
            className="input-text"
            value={this.state.salary}
            onChange={this.handleCertificate}
          />
          <br />
		  <input
        
            type="text"
            name="experience"
            placeholder="Enter desired start date..."
            className="input-text"
            value={this.state.start}
            onChange={this.handleExperience}
          />
          <br />
		  <input
            type="number"
            name="image"
            placeholder="Enter number of children..."
            className="input-text"
            value={this.state.number_of_children}
            onChange={this.handleChildren}
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