import React from "react";
import "./search.css";

export default function search() {
  function find(event) {
    event.preventDefault();
    alert("Searching");
  }
 return (
    <div className="search">
      <form onSubmit={find}>
        <input type="search" autoFocus={true} />
      </form>
    </div>
  );
 }