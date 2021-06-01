import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './components/Footer';
import About from './components/pages/About';
import Home from './components/pages/Home';
import HostFamily from './containers/HostFamily';
import CreateListing from './components/CreateListing';
import AuPair from './containers/AuPair'
import LoginForm from './components/pages/LoginForm';
import Signup from './components/pages/Signup';
import axios from 'axios';


const aupairsURL = "http://localhost:9292/aupair";
const hostFamiliesURL = "http://localhost:9292/hostFamily";


class App extends React.Component {

  adminUser =  {
    email:"admin@admin.com",
    password:"admin123"
  }

  state = {
    user: {
      name: "",
      email: ""
    },
    error: "",
    aupairs: [],
    hostFamilies: []
  }

   Login = details => {
    console.log(details)

    if (details.email == this.adminUser.email && details.password == this.adminUser.password){
      console.log("Logged in");
      this.setState({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not match!");
      this.setState("Details do not match!")
    }
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

componentDidMount = () => {
  axios.get(aupairsURL, {crossDomain: true}, {withCredentials: true})
    .then((response) => this.handleAuPairs(response.data.aupair))
    

  axios.get(hostFamiliesURL, {crossDomain: true}, {withCredentials: true})
    .then(response => this.handleHostFamilies(response.data))
}

Logout = () =>{
    this.setState({name: "", email: ""});
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
    <CreateListing />
    </Route>
    <Route path="/sign-up">
    <Signup />
    </Route>
    <Route path="/sign-in">
    <div className ="App">
      {(this.state.user.email != "") ? (
          <div className="welcome">
          <h2>Welcome, <span>{this.state.user.name}</span></h2>
          <button onClick={this.Logout}>Logout</button>
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
