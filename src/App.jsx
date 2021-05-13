import React from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import './App.css'

import AppProvider from './context';

import Welcome from "./pages/Welcome/Welcome"
import Personal from "./pages/Personal/Personal"
import DOB from "./pages/DOB/DOB"
import Agreement from "./pages/Agreement/Agreement"

function App() {
  return (
    <AppProvider> 
      <Router>
        <Route exact path="/">
          <Redirect to="/homepage" /> 
        </Route>
        <Switch>
          <Route exact path="/homepage" component={Welcome}/>
          <Route exact path="/personal" component={Personal} />
          <Route exact path="/dob" component={DOB} />
          <Route exact path="/agreement" component={Agreement}  />
        </Switch>
      </Router>
    </AppProvider>
  );
}

export default App;
