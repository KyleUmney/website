import React, { Component } from 'react';
import './App.css';

import Nav from "./components/nav";

import Home from "./pages/Home";
import Projects from "./pages/projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  
  render() {
    return (
      <>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/website/" component={Home} />
            <Route exact path="/website/Projects" component={Projects} />
            <Route exact path="/website/About" component={About} />
            <Route exact path="/website/Contact" component={Contact} />
            <Redirect to="/website/" />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
