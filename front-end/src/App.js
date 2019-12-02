import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Inicial from "./pages/inicial"
import ClientName from "./pages/clientName"
import ClintEmail from "./pages/clientEmail"
import ClientProdServ from "./pages/clientProductService"
import ClientProdServValue from "./pages/clientProdServValue"
import ClientInstallmentPlan from "./pages/clientInstallmentPlan"
import ClientDueDate from "./pages/clientDuoDate"
import ClientChargeReview from "./pages/clientChargeReview"
import ChargedSuccessfully from "./pages/chargedSuccessfully"

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
                path='/valorProdServCliente'
                render={({ match, history }) => <ClientProdServValue history={ history }/>}
            />
            <Route
                path='/valorParcCliente'
                render={({ match, history }) => <ClientInstallmentPlan history={ history }/>}
            />
            <Route
                path='/dtVencCliente'
                render={({ match, history }) => <ClientDueDate history={ history }/>}
            />
            <Route
                path='/resumoCobranca'
                render={({ match, history }) => <ClientChargeReview history={ history }/>}
            />
            <Route
                path='/cobrancaGerada'
                render={({ match, history }) => <ChargedSuccessfully history={ history }/>}
            />
            <Route
                path='/cobrancaVencer'
                render={({ match, history }) => <ChargedSuccessfully history={ history }/>}
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
