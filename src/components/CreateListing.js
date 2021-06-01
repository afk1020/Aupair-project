import React from 'react';
import ListingForm from './ListingForm';
import ListContainer from './ListContainer';
import './Listing.css'

const CreateListing = () => {
	const axios = require('axios')

	// axios.post('https:sample-endpoint.com/user', {
	// 	Name: 'Fred',
	// 	Age: '23'
	//   })
	//   .then(function (response) {
	// 	console.log(response);
	//   })
	return (
		<div className="App">
        <ListingForm /> 
        <ListContainer
        /> 
		</div>
	)
}
export default CreateListing
