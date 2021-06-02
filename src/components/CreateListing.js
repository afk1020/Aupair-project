import React from 'react';
import ListingForm from './ListingForm';
import './Listing.css'

class CreateListing extends React.Component {
	state = {
		image: "",
		name: "",
		aupairName: "",
		salary: "",
		startDate: ""
	  };
	  newValue = (event) => {
		event.preventDefault();
		this.props.addListing(this.state)
		
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
	
	  handleAge = (event) =>{
		this.setState({
		  aupairName: event.target.value
		})
	  }
	
	  handleNationality = (event) =>{
		this.setState({
		  startDate: event.target.value
		})
	  }
	  
	  handleCertificate = (event) =>{
		this.setState({
		  salary: event.target.value
		})
	  }
	  
	  render (){
	return (
		<div className="App">
        <ListingForm addListing={props.addListing}/>
		<ListingCard /> 
		</div>
	)
	}
}
export default CreateListing
