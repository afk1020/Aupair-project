import React from "react";
import './Listing.css'


class ListingForm extends React.Component {
  state = {
    name: "",
    image: "",
    likes: 0
  };
  newValue = (event) => {
    event.preventDefault();
    this.props.addToy(this.state)
  };

  handleName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleImage = (event) => {
    this.setState({
      image: event.target.value,
    });
  };

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
            name="image"
            placeholder="Enter your age..."
            className="input-text"
            value={this.state.image}
            onChange={this.handleImage}
          />
          <br />
		  <input
            type="text"
            name="image"
            placeholder="Enter your nationality..."
            className="input-text"
            value={this.state.image}
            onChange={this.handleImage}
          />
          <br />
		  <input
            type="text"
            name="image"
            placeholder="Enter your certificates..."
            className="input-text"
            value={this.state.image}
            onChange={this.handleImage}
          />
          <br />
		  <input
            type="text"
            name="image"
            placeholder="Enter years of experience..."
            className="input-text"
            value={this.state.image}
            onChange={this.handleImage}
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
          />
		  </div>
		  </div>
        </form>

    );
  }
}

export default ListingForm;