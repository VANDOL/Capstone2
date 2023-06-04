import React from "react";
import { Route, Redirect } from "react-router-dom";
import isLogin1 from "../utils/isLogin1";
import isLogin2 from "../utils/isLogin2";

export default function AuthRoute({ version, component: Component, ...rest }) {
  if (version === 1) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isLogin1() ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    );
  }
}
