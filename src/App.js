import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home';
import Details from './Components/Details';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/details/recipe/:id" component={Details} />
          </Switch>
          </div>
        </React.Fragment>
      </Router>
    )
  }
}

export default App
