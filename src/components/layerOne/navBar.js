import React from "react";
import Home from "./homeButton";
import Topics from "./topicDropDown";
import Login from "./login";

function NavBar({ loginhandler, saveusername }) {
  return (
    <div>
      <ul class="navlist">
        <li class="navlist">
          <Home />
        </li>
        <li class="navlist">
          {" "}
          <Topics />
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
