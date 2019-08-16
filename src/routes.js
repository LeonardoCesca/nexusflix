import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./components/Home"

const Routes = () => (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/home" component={ Home } />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
  
  export default Routes;