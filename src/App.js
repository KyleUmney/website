import React from 'react';
import './App.css';
import Nav from "./components/nav";
import Home from "./Pages/Home";
import Projects from "./Pages/projects";
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router forceRefresh={true}>
        <Nav />
        <Switch>
          <Route path="/Home" component={withRouter(Home)} />
          <Route path="/Projects" component={withRouter(Projects)} />
          <Route path="/About" component={withRouter(About)} />
          <Route path="/Contact" component={withRouter(Contact)} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
