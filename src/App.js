import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header.js';
import Body from './Components/Body.js';
import Footer from './Components/Footer.js';

class App extends Component {
    render() {
    return (
      <div>
    <Header/>
    <Body/>
    <Footer/>
    </div>
    );
  }
}

export default App;
