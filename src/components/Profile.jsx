import React, { useState, useEffect } from "react";
import { getUserByUsername } from '../services/api.js';
import NotFoundUser from './NotFoundUser.jsx';

export default function Profile({ getSearch }) {

  const [getUser, setUser] = useState(null);

  useEffect(() => {
    if (getSearch) {
      getUserByUsername(getSearch)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          }
        })
        .then(data => {
          setUser(data);
        })
        .catch(error => {
          console.error(error);
          setUser(null);
        });
    }
  }, [getSearch]);

  return (<>

    {!getUser && getSearch && <NotFoundUser user={getSearch} />}

    {
      getUser && (
        <div className="profile-container">

          <a href={`${getUser.html_url}`} target="_blank">
            <img className="profile-img" src={getUser.avatar_url} alt={`Avatar do ${getUser.login}`} />
          </a>

          <div className="profile-stats">

            <div className="flex-row">
              <h3 className="profile-name">{getUser.name}</h3>
              <p className="profile-at">@{getUser.login}</p>
            </div>

            <p className="profile-bio">
              {getUser.bio}
            </p>

            <p className="profile-follows-followers">{getUser.followers} followers · {getUser.following} following</p>

          </div>

        </div>
      )
    }

  </>

  );
}
