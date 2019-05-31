import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      // <div className="App">
      //   <div className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <h2>Welcome to React</h2>
      //   </div>
      //   <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p>
      // </div>

      
      <Router>
        <div>
          <Route path="/" component={NavBar} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            {/* <Route exact path="/contact" component={ContactMe} />
            <Route exact path="/projects" component={Projects} /> */}

          </Switch>
        </div>
      </Router>


      // <NavBar />
    );
  }
}

export default App;
