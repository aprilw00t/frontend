import React from "react";
import Home from "./homeButton";
import Topics from "./topicDropDown";
import Login from "./login";

function NavBar({ loginhandler, saveusername, loggedIn }) {
  return (
    <div>
      <ul class="navlist">
        <li class="navlist">
          <Home loggedIn={loggedIn} />
        </li>
        <li class="navlist">
          {" "}
          <Topics loggedIn={loggedIn} />
        </li>

        <li class="navlist">
          <Login loginhandler={loginhandler} saveusername={saveusername} />
        </li>
      </ul>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default NavBar;
