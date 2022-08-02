import React, { useContext } from "react";
import { Route } from "react-router-dom";
import { AdminContext } from "../../context/AdminContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { state } = useContext(AdminContext);

  return <Route {...rest} render={({ location }) => children} />;
};

export default PrivateRoute;
