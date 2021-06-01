import React from 'react';
import ListingForm from './ListingForm';
import './Listing.css'

class CreateListing extends React.Component {

	render() {
	return (
		<div className="App">
        <ListingForm /> 
        {/* <ListContainer
        /> */}
		</div>
	)
}
}
export default CreateListing
