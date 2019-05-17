import React from "react";
import "../../../App.css";
function Sort({ articleSort }) {
  return (
    <select
      onClick={e => {
        articleSort(e.target.value);
      }}
    >
      <option value="created_at">time created</option>
      <option value="votes">votes</option>
      <option value="title">title</option>
    </select>
  );
}
export default Sort;
