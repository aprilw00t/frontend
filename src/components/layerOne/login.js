import React from "react";
import LoginPage from "../layerTwo/login/loginpage";
import "../../.././src/App.css";
//import { Link } from "@reach/router";

function Login() {
  return (
    <div class="hoverWrapper">
      <button> login </button>
      <div id="hoverShow1">
        1) <LoginPage />{" "}
      </div>
    </div>
  );
}

export default Login;
