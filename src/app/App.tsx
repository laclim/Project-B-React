import * as React from "react";
import NavBar from "./component/navbar";
// import "./App.css";
import Login, { UserProps, State } from "./component/login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  RouteProps
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { AppActions, SET_SESSION } from "./types/action";

import Home from "./component/home";
import StoreState, { User } from "./types/user";
import Protected from "./component/protected";
import axios from "axios";

function App() {
  console.log(sessionStorage.getItem("token"));
  const dispatch = useDispatch();

  dispatch({
    type: SET_SESSION,
    payload: sessionStorage.getItem("token") ? true : false
  });

  return (
    /* <Form name="" /> */

    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <AuthRoute exact path="/login" component={Login} />
        <Route exact path="/protected" component={Protected} />
      </Switch>
    </Router>
  );
}

const AuthRoute = ({ component: Component, ...rest }: RouteProps) => {
  if (!Component) {
    throw Error("component is undefined");
  }
  const authenticated = useSelector(
    (state: StoreState) => state.user.authenticated
  );

  return (
    <Route
      {...rest}
      render={props =>
        authenticated === true ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default App;
