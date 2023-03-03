import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");
  return (
    <div>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      ></input>
      <button onClick={() => onSubmit(term)}>Search</button>
    </div>
  );
}

export default SearchBar;
