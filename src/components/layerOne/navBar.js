import React from "react";
import Home from "./homeButton";
import Topics from "./topicDropDown";
import Login from "./login";
import Sort from "../layerTwo/./displayAllArticles/sort_by";

function NavBar({
  loginhandler,
  articleSort,
  saveusername,
  loggedIn,
  buttonChange
}) {
  return (
    <div class="topnav">
      <ul class="ul">
        <li class="navlist">
          <Home loggedIn={loggedIn} />
        </li>
        <li class="navlist">
          {" "}
          <Topics loggedIn={loggedIn} />
        </li>

        <li class="navlist">
          <Login
            loginhandler={loginhandler}
            saveusername={saveusername}
            buttonChange={buttonChange}
          />
        </li>
        <li class="navlist">
          <Sort articleSort={articleSort} />
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
