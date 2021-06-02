import React from 'react'

function ListingCard() {
	return (
		<div className="card" id={this.props.toy.id}>
        <h2>{this.props.toy.name}</h2>
        <img src={this.props.toy.image} alt={this.props.toy.name} className="toy-avatar" />
        <p>{this.props.toy.likes} Likes </p>
        <button className="like-btn" onClick={()=>this.props.handleLikeClick(this.props.toy)}>Like {'<3'}</button>
        <button className="del-btn" onClick={()=> this.props.delete(this.props.toy.id)}>Donate to GoodWill</button>
      </div>
	)
}

export default ListingCard
