import React,{useState} from "react";
import "./search.css";

export default function Search() {
let [keyword, setkeyword] = useState("");


  function find(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);
  }

  function handleKeywordChange(event) {
    setkeyword(event.target.value);
  }

 return (
    <div className="search">
      <form onSubmit={find}>
        <input type="search" onChange= {handleKeywordChange} />
      </form>
    </div>
  );
 }