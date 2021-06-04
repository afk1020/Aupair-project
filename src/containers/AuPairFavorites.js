
import React from 'react'
import AuPairCard from '../components/AuPairCard.js';

const AuPairFavorites = (props) => {
  
    return(
      
        <div className="aupair_Favorites">
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