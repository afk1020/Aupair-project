import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Navbar/Header';
import Footer from './components/Footer';
import About from './components/About';
import Home from './components/Home';
import HostFamily from './components/HostFamily';
import CreateListing from './components/CreateListing';
import AuPair from './components/AuPair'
function App() {

  fetch("http://localhost:9292/test")
  .then((res) => res.json())
  .then(console.log); 

  return (
    <Router>
   <Navbar />
   <Header />
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
    </Switch>
   </Router>
  );
}

export default App;
