
import React from 'react'
import AuPairCard from '../components/AuPairCard.js';

const AuPairFavorites = (props) => {
  
	const style ={
		// boxShadow: "0px 0px 15px -5px",
		// transition: "0.3s",
		// animation: "ease-in",
		// borderRadius: "5%",
		// overflow: "hidden",
		// width: "15vw",
		// height: "auto",
		// margin: "10px",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center"
	}
    return(
      
        <div className="aupair_Favorites" style={style}>
           {props.favoriteData.map(auPair => {
            return <AuPairCard
            auPair ={auPair}
            key = {auPair.id}
            favoriteId ={auPair.id}
            handleClick ={props.removeFromFavorites}
          
            />
        
        })}
        </div>
          
      )
          
    }

export default AuPairFavorites;