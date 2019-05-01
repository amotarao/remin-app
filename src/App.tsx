import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'unstated';
import { Top } from './components/pages/Top';
import { Callback } from './components/pages/Callback';

const App: React.FC = () => (
  <Provider>
    <Router>
      <Route path="/" exact component={Top} />
      <Route path="/callback" component={Callback} />
    </Router>
  </Provider>
);

export default App;
