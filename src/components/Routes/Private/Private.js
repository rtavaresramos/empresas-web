import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import StoreContext from "../../Store/Context";

const RoutesPrivate = ({ component: Component, ...rest }) => {
  const { accessToken, client, uid } = useContext(StoreContext);

  return (
    <Route
      {...rest}
      render={() =>
        accessToken && client && uid ? (
          <Component {...rest} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default RoutesPrivate;
