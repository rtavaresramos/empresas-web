import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import StoreProvider from "./components/Store/Provider";
import RoutesPrivate from "./components/Routes/Private/Private";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Company from "./pages/Company";

export default function Routes() {
  return (
    <BrowserRouter>
      <StoreProvider>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          <RoutesPrivate path="/home" exact component={Home} />
          <RoutesPrivate path="/company/:companyId" exact component={Company} />
        </Switch>
      </StoreProvider>
    </BrowserRouter>
  );
}
