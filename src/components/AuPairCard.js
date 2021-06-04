import React, { Component } from 'react';
import './AuPairCard.css';
import { Link } from 'react-router-dom'

class AuPairCard extends Component {
  
  aupairArray = [ 
    "https://st.depositphotos.com/1594308/3290/i/950/depositphotos_32904189-stock-photo-pretty-girl.jpg",
    "https://st.depositphotos.com/1937573/2311/i/950/depositphotos_23115590-stock-photo-young-smiling-girl-dressed-in.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8oGSUfexvS4Uk7QKIfYm-1H03t7EgFjnb7w&usqp=CAU",
    "https://static9.depositphotos.com/1049680/1209/i/950/depositphotos_12095068-stock-photo-woman-holding-a-coconut.jpg",
    "https://st3.depositphotos.com/8527202/18724/i/1600/depositphotos_187248956-stock-photo-beautiful-young-asian-girl-have.jpg",
    "https://st2.depositphotos.com/2853475/8936/i/950/depositphotos_89369480-stock-photo-smiling-woman-with-umbrella.jpg",
    "https://st4.depositphotos.com/13193658/22194/i/1600/depositphotos_221942530-stock-photo-happy-transgender-man-white-shirt.jpg",
    "https://st.depositphotos.com/1104564/4474/i/950/depositphotos_44748431-stock-photo-farmer-milking-goats.jpg",
    "https://st4.depositphotos.com/13185108/27107/i/1600/depositphotos_271074824-stock-photo-happy-latin-man-holding-soccer.jpg",
    "https://st4.depositphotos.com/16405760/20466/i/1600/depositphotos_204661762-stock-photo-brunette-woman-curly-hair-holding.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUO-SXHyha9dBClN-CveW0SQhTtMakrJOyWQ&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrVVl9dBEgAhRtHbMHy3PrYL03w8cEbyjI8g&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqVNpQsE288DBSU_Vst61c4Ye1ftdO3Bo2eA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdhE2n42fbFALfmCR2j9dLiNkejUD73S3bw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYI_WJ5y13IayJgD25YJpmg-jjrclMYV73Lg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqCCxRfXUC6yRQ4dgYyp7GLhlKhNgE9GHSYw&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG23Ip7fU9DTAIsXoFntw4hkwwhqrkhGJyJg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfAgqF-sJoDtvegEwILsVsGAxEmHvm92N-IQ&usqp=CAU"

  ]
    render() {
    return (
      <div className="aupair-card" key={this.props.auPair.id}>
        <div className="image-container">
        <img src={`${this.aupairArray[Math.floor(Math.random()*this.aupairArray.length)]}`}></img>
      </div>
      <div className="card-content">
      <div className="card-title">
        <h4>{this.props.auPair.name}</h4>
      </div>
      <div className="card-body">
        <p><span style={{fontWeight: "bold"}}>Age: </span> {this.props.auPair.age} </p>
        <p><span style={{fontWeight: "bold"}}>Nationality: </span>{this.props.auPair.nationality} </p>
        <p><span style={{fontWeight: "bold"}}>Years of Experience: </span> {this.props.auPair.years_of_experience}  </p>
      </div>
      <div className="btnn" >
      <Link to='/create-listing'>
          <button>
            <a>
              Show Interest
            </a>
          </button>
        </Link>

        <button style={{marginLeft: "10px", marginTop: "10px"}} onClick={()=>this.props.handleClick(this.props.auPair)}>
        <a>Favorite ⭐️ </a>
        </button>

      </div>
      </div>
      </div>
    );
  }

}

export default AuPairCard;