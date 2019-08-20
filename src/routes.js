import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/Login'
import Home from "./components/Home"
import Profile from "./components/Profile"
import Logout from "./components/Logout"

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/home" component={ Home } />
        <Route path="/logout" component={ Logout } />
        <Route path="/profile" component={ Profile } />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;