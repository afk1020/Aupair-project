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


const aupairsURL = "http://localhost:9292/Aupair";
const hostFamiliesURL = "http://localhost:9292/Family";
const listingURL = "http://localhost:9292/Listing"

class App extends React.Component {

  state = {
    aupairs: [],
    hostFamilies: [],
    listings: [],
    user: {
      name: "",
      email: ""
    },
    error: "",
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

handleListing = (listingData) => {
  this.setState({
    listings: listingData
  })
}

Login = details => {
 
 if (details.email == this.adminUser.email && details.password == this.adminUser.password){
    console.log("Logged in");
    this.setState({
      name: details.name,
      email: details.email
    });
  } else {
    console.log("Details do not match!");
    this.setState({error: "Details do not match!"})
  }
}

componentDidMount = () => {
  axios.get(aupairsURL, {crossDomain: true}, {withCredentials: true})
    .then((response) => this.handleAuPairs(response.data.aupair))
    

  axios.get(hostFamiliesURL, {crossDomain: true}, {withCredentials: true})
    .then(response => this.handleHostFamilies(response.data))
}

addListing = (newListing) => {
    axios.post(listingURL, newListing )
    .then(() => this.setState({listings: [...this.state.listings, newListing] }))
}

Logout = () =>{
  this.setState({ name: "", email: ""});
  console.log("Logout");
}
render(){
  return (
    <Router>
   <Navbar />
   <Footer />
   <Switch>
    <Route exact path="/">
    <Home />
    </Route>
    <Route path="/about">
    <About />
    </Route>
    <Route path="/host-families">
    <HostFamily hostFamilyData={this.state.hostFamilies}/>
    </Route>
    <Route path="/Au-pair">
    <AuPair auPairData={this.state.aupairs}/>
    </Route>
    <Route path="/create-listing">
    <CreateListing 
    addListing={this.addListing}
    listing={this.state.listings}
    />
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
          <button onClick={this.Logout}>Return to Home</button>
          </Link>
          </div>
      ) : (

      <LoginForm Login={this.Login} error={this.error} />
      )}
    </div>
    </Route>
    </Switch>
   </Router>
  );
}
}

export default App;