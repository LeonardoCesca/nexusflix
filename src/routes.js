import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './components/Login'
import Home from "./components/Home"
import Profile from "./components/Profile"
import Play from "./components/Play"
import NotFound from "./components/NotFound"
import Logout from "./components/Logout"

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/home" component={ Home } />
        <Route path="/logout" component={ Logout } />
        <Route path="/profile" component={ Profile } />
        <Route path="/play" component={ Play } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;