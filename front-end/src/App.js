import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Inicial from "./pages/inicial"
import ClientName from "./pages/clientName"
import ClintEmail from "./pages/clientEmail"
import ClientProdServ from "./pages/clientProductService"

function App() {
  return (
    <Router>
        <Switch>
            <Route
                path='/nomecliente'
                render={({ match, history }) => <ClientName history={ history }/>}
            />
            <Route
                path='/emailCliente'
                render={({ match, history }) => <ClintEmail history={ history }/>}
            />
            <Route
                path='/prodServCliente'
                render={({ match, history }) => <ClientProdServ history={ history }/>}
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
