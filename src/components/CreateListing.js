import React from 'react';
import ListingForm from './ListingForm';
import './Listing.css'

const CreateListing = (props) => {

	return (
		<div className="App">
        <ListingForm addListing={props.addListing}/> 
		</div>
	)

}
export default CreateListing
