import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/Footer';
import About from './components/pages/About';
import Home from './components/pages/Home';
import HostFamily from './components/pages/HostFamily';
import CreateListing from './components/CreateListing';
import AuPair from './components/pages/AuPair'
import LoginForm from './components/pages/LoginForm';
import Signup from './components/pages/Signup';
function App() {

  const adminUser = {
    email:"admin@admin.com",
    password:"admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");
  const Login = details => {
    console.log(details)

    if (details.email == adminUser.email && details.password == adminUser.password){
      console.log("Logged in");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details do not match!");
      setError("Details do not match!")
    }
  }

  const Logout = () =>{
    setUser({ name: "", email: ""});
    console.log("Logout");
  }

  fetch("http://localhost:9292/test")
  .then((res) => res.json())
  .then(console.log); 

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
    <HostFamily />
    </Route>
    <Route path="/Au-pair">
    <AuPair />
    </Route>
    <Route path="/create-listing">
    <CreateListing />
    </Route>
    <Route path="/sign-up">
    <Signup />
    </Route>
    <Route path="/sign-in">
    <div className ="App">
      {(user.email != "") ? (
          <div className="welcome">
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
          </div>
      ) : (

      <LoginForm Login={Login} error={error} />
      )}
    </div>
    </Route>
    </Switch>
   </Router>
  );
}

export default App;
