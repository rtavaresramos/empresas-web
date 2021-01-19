import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Company from "./pages/Company";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/home" exact component={Home} />
        <Route path="/company" exact component={Company} />
      </Switch>
    </BrowserRouter>
  );
}
