import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Sidebar } from './components';
import {
  Home, Location, Episode, CharacterDetail,
} from './pages';

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="base__container">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/locations" component={Location} />
          <Route path="/episodes" component={Episode} />
          <Route path="/character/:charId" component={CharacterDetail} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
