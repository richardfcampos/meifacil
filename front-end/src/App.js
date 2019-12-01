import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Inicial from "./pages/inicial"
import ClientName from "./pages/clientName"

function App() {
  return (
    <Router>
        <Switch>
            <Route
                path='/nomecliente'
                render={({ match, history }) => <ClientName />}
            />
            <Route
                path='/'
                render={({ match, history }) => <Inicial history={ history }/>}
            />
        </Switch>
    </Router>
  );
}

export default App;
