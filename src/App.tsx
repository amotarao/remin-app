import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'unstated';
import { TopContainer } from './components/pages/Top';
import { CallbackContainer } from './components/pages/Callback';
import { GlobalStyle } from './constants/GlobalStyle';

const App: React.FC = () => (
  <Provider>
    <GlobalStyle />
    <Router>
      <Route path="/" exact component={TopContainer} />
      <Route path="/callback" component={CallbackContainer} />
    </Router>
  </Provider>
);

export default App;
