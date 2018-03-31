import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from '../components/Home';
import Submit from '../components/Submit';
import List from '../components/List';

class App extends Component {
  render() {
    return (
      <div>
        <h1>CalicheIpsum</h1>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/submit">Submit</Link>
              </li>
              <li>
                <Link to="/list">List</Link>
              </li>
            </ul>

            <hr />

            <Route exact path="/" component={Home} />
            <Route exact path="/submit" component={Submit} />
            <Route exact path="/list" component={List} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
