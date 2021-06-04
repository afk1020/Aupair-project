import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import AuPair from './containers/AuPair';
import HostFamily from './containers/HostFamily';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer';
import About from './components/pages/About';
import Home from './components/pages/Home';
import CreateListing from './components/CreateListing';
import Signup from './components/pages/Signup';
import LoginForm from './components/pages/LoginForm'
import axios from 'axios';
import AuPairFavorites from './containers/AuPairFavorites'
import Video from './components/Video'


const aupairsURL = "http://localhost:9292/Aupair";
const hostFamiliesURL = "http://localhost:9292/Family";
const favoriteURL = "http://localhost:9292/Favorite"

class App extends React.Component {

  state = {
    aupairs: [],
    hostFamilies: [],
      name: "",
      email: "",
      isLogged: false,
      currentUser: {},
    error: "",
    favorites: [],
  }


   adminUser = {
    email:"admin@admin.com",
    password:"admin123"
  }
handleAuPairs = (auPairData) => {
  this.setState({
    aupairs: auPairData
  
  })
}
handleHostFamilies = (hostFamilyData) => {
  this.setState({
    hostFamilies: hostFamilyData
  })
}
handleFavoritesData = (data) => {
  let collection=[]
  data.map ((favorite)  => {
    let x = favorite.aupair
    collection.push(x)
  
  })
  
  console.log(collection)
this.setState({
  favorites: collection
})}

Login = details => {
 
 if (details.email == this.adminUser.email && details.password == this.adminUser.password){
    console.log("Logged in");
    this.setState({
      name: details.name, 
      isLogged: true,
      email: details.email
    });
  } else {
    alert("Details do not match!");
    this.setState({error: "Details do not match!"})
  }
}


componentDidMount = () => {
  axios.get(aupairsURL, {crossDomain: true}, {withCredentials: true})
    .then((response) => this.handleAuPairs(response.data.aupair))
    

  axios.get(hostFamiliesURL, {crossDomain: true}, {withCredentials: true})
    .then(response => this.handleHostFamilies(response.data.family))

    axios.get(favoriteURL, {crossDomain: true}, {withCredentials: true})
    .then(response => this.handleFavoritesData(response.data.favorite))
}

addListing = (newListing) => {
  axios.post(hostFamiliesURL, newListing )
  .then(() => this.setState({hostFamilies: [...this.state.hostFamilies, newListing] }))
}

addFavListing = (newListing) => {
  axios.post(favoriteURL, newListing )
  .then(() => this.setState({favorites: [...this.state.favorites, newListing] }))
}
Logout = () =>{
  this.setState({ name: "", email: "", isLogged: false});
  console.log("Logout");
}

approval =(id) => {
  const approve = this.state.hostFamilies.map(family => (family.id == id) ? { ...family, isApproved: true} : family )
 this.setState({hostFamilies: approve})
 alert("Congratulation on accepting the offer, the family will reach out with more information")
 }
 addFavorite = (newFav) => {
  //console.log(newFav)
  let postOption = {
    method: "POST",
    headers: {
      "Content-Type": 'application/json',
      Accepts: 'application/json'
    },
    body: JSON.stringify(newFav)
  }
  console.log(postOption)

 fetch(favoriteURL, postOption, {crossDomain: true}, {withCredentials: true})
      .then(res => res.json())
      .then(this.setState({ favorites: [...this.state.favorites, newFav] }))
  }

render(){
  return (
    <Router>
   <Navbar loggedIn={this.state.isLogged}
     name={this.state.name}
     Logout={this.Logout}
   />
   <Footer />
   <Switch>
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/about">
    <About />
    </Route>
    <Route path="/host-families">
    <HostFamily 
    hostFamilyData={this.state.hostFamilies}
    approval={this.approval}
    />
    </Route>
    <Route path="/Au-pair">
    <AuPair 
    auPairData={this.state.aupairs}
    addFavorite={this.addFavorite}
    />
    </Route>
    <Route path="/create-listing">
    <CreateListing 
    addListing={this.addListing}
    />
    </Route>
    <Route path="/Favorites">
    <AuPairFavorites auPairData={this.state.aupairs} removeFromFavorites={this.removeFromFavorites} favoriteData={this.state.favorites} />
    </Route>
    <Route path="/sign-up">
    <Signup />
    </Route>
    <Route path="/sign-in">
    <div className ="App">
      {(this.state.email != "") ? (
          <div className="welcome">
          <h2>Welcome, <span>{this.state.name}</span></h2>
          <Link to='/'>
          <button>Return to Home</button>
          </Link>
          </div>
      ) : (

      <LoginForm Login={this.Login} error={this.error} />
      )}
    </div>
    </Route>
    <Route path="/log-out">
    <Home />
    </Route>
    <Route path="/video">
    <Video />
    </Route>
    </Switch>
   </Router>
  );
}
}
export default App;