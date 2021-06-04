import React, { Component } from 'react';
import './HostFamilyCard.css'

class HostFamilyCard extends Component {
	aupairArray = [ 
"https://static5.depositphotos.com/1037987/484/i/950/depositphotos_4840360-stock-photo-portrait-of-happy-family-in.jpg",
"https://st.depositphotos.com/1075946/3664/i/950/depositphotos_36646171-stock-photo-parents-with-children.jpg",
"https://static5.depositphotos.com/1003434/401/i/950/depositphotos_4014500-stock-photo-large-family.jpg",   
"https://st2.depositphotos.com/4664061/7942/i/950/depositphotos_79429182-stock-photo-asian-family-lifestyle.jpg",
"https://st.depositphotos.com/1007959/1862/i/950/depositphotos_18627869-stock-photo-happy-attractive-hispanic-family-portrait.jpg",
"https://st3.depositphotos.com/1888161/12810/i/950/depositphotos_128107804-stock-photo-happy-african-family.jpg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRglNF04mGx2Q4jNM0B0DVXy2crjjU3ritlcg&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Q7LirHQNc7esIno8GIsyBoApqUXeKskGwA&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0HVGfYKkUXG3UWSXqkCe8LiZu_ok7L0n1GA&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsPpg6q5DygOpmlR3zwVM-oIhqqprvXqOPBA&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSP3N8rzhm34uBdIEHeaXl4gqs7yM2mLaQHIQ&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG373XPKz2DjxyAZZpGD46y9roxiljEUDZTg&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy0lMCbmUo3kfJTLNBgvjp9m0CyTUDw1Z1SA&usqp=CAU",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-59ayADUrk4e2tqXbItZgUMNaxgT8J_VlYw&usqp=CAU"

	]
    render() {
    return (
		<div className="hostfamily-container" id={this.props.hostFamily.name}>
        <div className="image-container">
        <img src={`${this.aupairArray[Math.floor(Math.random()*this.aupairArray.length)]}`}></img>
        </div>
        <div className="card-content">
        <div className="card-title">
        <h4>Family Name: {this.props.hostFamily.fullname}</h4>
        </div>
        <div className="card-body">
        <p><span style={{fontWeight: "bold"}}>Salary Offered: </span> ${this.props.hostFamily.salary} </p>
        <p><span style={{fontWeight: "bold"}}>Start Date: </span>{this.props.hostFamily.start} </p>
        <p><span style={{fontWeight: "bold"}}>Number Of Children: </span> {this.props.hostFamily.number_of_children}  </p>
      </div>
      <div className="btnn" style={{marginTop: "10px"}}>
          {this.props.hostFamily.isApproved == true?  <button className="ui disabled button">Offer Accepted</button> : <button className="ui primary button" onClick ={() => this.props.approval(this.props.hostFamily.id)}>Accept Offer</button> }
      </div>
      </div>
      </div>
    );
}
}

export default HostFamilyCard;