import { React, useState } from "react"

export default function Search({ setSearch }) {

  const [searchInput, setSearchInput] = useState("");

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      setSearch(searchInput);
    }
  };

  return (
    <>

      <div className="flex-row search-container">
        <input
          placeholder="@your-username"
          className="search-input"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className="search-button" onClick={() => setSearch(searchInput)}>
          Find 🔍
        </button>
      </div>

    </>
  )
}