import logo from './logo.svg'
import './App.css'
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Welcome from "./pages/Welcome/Welcome"
import Personal from "./pages/Personal/Personal"
import DOB from "./pages/DOB/DOB"
import Agreement from "./pages/Agreement/Agreement"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/homepage" component={Welcome}/>
        <Route exact path="/personal" component={Personal} />
        <Route exact path="/dob" component={DOB} />
        <Route exact path="/agreement" component={Agreement}  />
      </Switch>
    </Router>
  );
}

export default App;
