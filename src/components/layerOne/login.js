import React from "react";
//import LoginPage from "../layerTwo/login/loginpage";
import "../../.././src/App.css";
//import { Link } from "@reach/router";

function Login({ loginhandler, saveusername }) {
  return (
    <div>
      <form />
      <button onClick={loginhandler}> login </button>
      <input
        type="text"
        placeholder="username"
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
