import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import useAuth from './hooks/useAuth';

import Main from './Main/Main';
import Tracks from './Tracks/Tracks';

function RouteApp({ code }) {
  const accessToken = useAuth(code);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Main accessToken={accessToken} />} />
        <Route path="/tracks/:term" component={() => <Tracks accessToken={accessToken} />} />
      </Switch>
    </Router>
  )
}

export default RouteApp;