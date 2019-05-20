import React from "react";
import Home from "./homeButton";
import Topics from "./topicDropDown";
import Login from "./login";
import Sort from "../layerTwo/./displayAllArticles/sort_by";
import "../../App.css";
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
        <li class="topics">
          <Home loggedIn={loggedIn} />
        </li>
        <li class="topics">
          {" "}
          <Topics loggedIn={loggedIn} />
        </li>

        <li class="topics">
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
    </div>
  );
}

export default NavBar;
