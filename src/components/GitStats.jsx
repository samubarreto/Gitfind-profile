import React, { useState } from "react";
import Search from './Search.jsx';
import Profile from './Profile.jsx';
import Repos from './Repos.jsx';

export default function GitStats() {

  const [getSearch, setSearch] = useState("");

  return (
    <>

      <div className="stats-container">
        <Search setSearch={setSearch} />
        <Profile getSearch={getSearch} />
        <Repos getSearch={getSearch} />
      </div>

    </>
  )
}