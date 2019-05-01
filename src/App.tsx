import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'unstated';
import { Callback } from './components/pages/Callback';
import logo from './logo.svg';
import './App.css';

const Index: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

const App: React.FC = () => (
  <Provider>
    <Router>
      <Route path="/" exact component={Index} />
      <Route path="/callback" component={Callback} />
    </Router>
  </Provider>
);

export default App;
