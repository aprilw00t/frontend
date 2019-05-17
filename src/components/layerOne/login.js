import React from "react";
//import LoginPage from "../layerTwo/login/loginpage";
import "../../.././src/App.css";
//import { Link } from "@reach/router";

function Login({ loginhandler, saveusername, buttonChange }) {
  return (
    <div>
      <form />
      <button class="form" onClick={loginhandler}>
        {" "}
        {buttonChange}{" "}
      </button>
      <input
        type="text"
        placeholder="use jessjelly"
        name="username"
        required
        onChange={saveusername}
      />
      <input type="text" placeholder="password" name="password" required />

      <form />
    </div>
  );
}

export default Login;
