import React from "react";
import { Link } from "@reach/router";
function Home() {
  return (
    <Link to={"/"}>
      <div id="myDropdown"> Home </div>{" "}
    </Link>
  );
}

export default Home;
