import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Sidebar } from './components';
import routes from './routes/routes';

function App() {
  return (
    <Router>
      <Sidebar />
      <div className="base__container">
        <Switch>
          {routes.map((route) => {
            <Route path={route.path} component={route.component} exact={route.exact} />;
          })}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
