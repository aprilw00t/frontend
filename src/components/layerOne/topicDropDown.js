import React from "react";
//import { Link } from "@reach/router";

function Topics({ loggedIn }) {
  return (
    //   return (
    //     <select>
    //       <option value="footy">Football</option>
    //       <option value="Coding">Coding</option>
    //       <option value="Cooking">Cooking</option>
    //     </select>
    //   );
    // }

    <div>
      <a class="links" href="/articles/topic/football" value="footy">
        Football
      </a>
      <a class="links" href="/articles/topic/coding" value="Coding">
        Coding
      </a>
      <a class="links" href="/articles/topic/cooking" value="Cooking">
        Cooking
      </a>
    </div>
  );
  // <div class="dropdown">
  //   <button onclick="myFunction()" class="dropbtn">
  //     Dropdown
  //   </button>
  //   <div id="myDropdown" class="dropdown-content">
  //     <a href="#">Link 1</a>
  //     <a href="#">Link 2</a>
  //     <a href="#">Link 3</a>
  //   </div>
  // </div>;
}

export default Topics;
