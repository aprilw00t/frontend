import React from "react";
import { Link } from "@reach/router";
function Home() {
  return (
    <Link to={"/"}>
      <div id="myDropdown" class="links">
        {" "}
        Home{" "}
      </div>{" "}
    </Link>
  );
}

export default Home;
