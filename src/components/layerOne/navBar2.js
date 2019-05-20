import React from "react";
import Home from "./homeButton";
import Topics from "./topicDropDown";
import "../../App.css";
function NavBar2({ loggedIn }) {
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
      </ul>
      <br />
      <br />
    </div>
  );
}

export default NavBar2;
