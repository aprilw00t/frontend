import React from "react";
import Filter from "./filter";
import Home from "./homeButton";
import Topics from "./topicDropDown";
import Login from "./login";

function NavBar() {
  return (
    <div>
      <ul class="navlist">
        <li class="navlist">
          <Home />
        </li>
        <li class="navlist">
          {" "}
          <Filter />
        </li>
        <li class="navlist">
          {" "}
          <Topics />
        </li>

        <li class="navlist">
          <Login />
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
