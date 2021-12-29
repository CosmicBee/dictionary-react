import React,{useState} from "react";
import "./search.css";
import axios from "axios";

export default function Search() {
let [keyword, setkeyword] = useState("");


function handleResponse(response){
  console.log(response.data[0]);
};

  function find(event) {
    event.preventDefault();
    alert(`Searching for ${keyword} definition`);


    //Api Documentation https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/$(keyword)`;
    axios.get(apiUrl).then(handleResponse);
  
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