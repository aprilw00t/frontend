import React from "react";
//import LoginPage from "../layerTwo/login/loginpage";
import "../../.././src/App.css";
//import { Link } from "@reach/router";

function Login({ loginhandler, saveusername, buttonChange }) {
  return (
    <div>
      <form class="inline" />
      <ul>
        <li class="line">
          <button class="topics" onClick={loginhandler}>
            {buttonChange} &thinsp;
          </button>
        </li>
        <li class="line">
          <input
            type="text"
            placeholder="jessjelly"
            name="username"
            size="6"
            required
            onChange={saveusername}
          />
        </li>

        <li class="line">
          &thinsp;
          <input
            type="password"
            placeholder="password"
            name="password"
            size="6"
            required
          />
        </li>
      </ul>
      <form />
    </div>
  );
}

export default Login;
