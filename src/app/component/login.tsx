import * as React from "react";
import { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios, { AxiosResponse } from "axios";
import { BasicAuth } from "../axios/axiosConfig";
import { stringify } from "querystring";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import "../app.scss";

import StoreState, { User } from "../types/user";

import { SET_AUTHENTICATED } from "../types/action";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export interface UserProps {
  // user: object;
}

export interface State {
  username: string;
  password: string;
  loading: Boolean;
  error: string;
  authen: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      margin: "10px 10px 10px 10px",

      width: 200,
      background: "#fff"
    },
    customError: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: 10
    },
    form: { textAlign: "center" }
  })
);

const Login = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState("");
  // const [userId, setUserId] = useState();
  const dispatch = useDispatch();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      username: username,
      password: password
    };

    axios
      .post("/login", stringify(userData), BasicAuth)
      .then(res => {
        console.log(res.data);
        dispatch({ type: SET_AUTHENTICATED, res: res });
        sessionStorage.setItem("token", res.data.accessToken);
        sessionStorage.setItem("refreshToken", res.data.refreshToken);
        const FBIdToken = `Bearer ${res.data.accessToken}`;
        axios.defaults.headers.common["Authorization"] = FBIdToken;

        // props.history.push("/");
      })
      .catch(err => {
        setError(err.response.data.message);
        // console.log(err.data);
      });
    setLoading(false);
  };

  return (
    <div className="login">
      <Grid container spacing={3} className={classes.form}>
        <Grid item sm />
        <Grid item sm={12}>
          <form onSubmit={handleLogin}>
            <TextField
              className={classes.textField}
              label="Username"
              name="username"
              type="text"
              onChange={e => setUsername(e.target.value)}
              value={username}
              variant="outlined"
            ></TextField>

            <TextField
              className={classes.textField}
              name="password"
              label="Password"
              type="password"
              placeholder="password"
              onChange={e => setPassword(e.target.value)}
              value={password}
              variant="outlined"
            ></TextField>
            <Typography variant="body2" className={classes.customError}>
              {error}
            </Typography>
            <Button type="submit">
              Login {loading && <CircularProgress />}
            </Button>
          </form>
          {userId && <h1>{userId}</h1>}
        </Grid>
        <Grid item sm />
      </Grid>
    </div>
  );
};

export default Login;
