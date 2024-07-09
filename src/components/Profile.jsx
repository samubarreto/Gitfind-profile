import React, { useState, useEffect } from "react";
import { getUserByUsername } from '../services/api.js';
import UserError from './UserError.jsx';

export default function Profile({ getSearch }) {
  const [getUser, setUser] = useState(null);
  const [getError, setError] = useState(null);

  useEffect(() => {

    if (getSearch) {
      getUserByUsername(getSearch)
        .then(response => {

          if (response.status === 200) {
            setError(null);
            return response.json();
          } else {
            setUser(null);

            if (response.status === 403) {
              setError("403");

            } else if (response.status === 404) {
              setError("404");

            } else {
              setError("Unknown error");
            }
          }
        })
        .then(data => {
          if (data) {
            setUser(data);
          }
        })
        .catch(error => {
          console.error(error);
          setError("Network error");
          setUser(null);
        });
    }
  }, [getSearch]);

  return (
    <>

      {!getUser && getSearch && <UserError user={getSearch} error={getError} />}

      {getUser &&
        (
          <div className="profile-container">

            <a href={`${getUser.html_url}`} target="_blank">
              <img className="profile-img" src={getUser.avatar_url} alt={`Avatar do ${getUser.login}`} />
            </a>

            <div className="profile-stats">

              <div className="flex-row">
                <h3 className="profile-name">{getUser.name}</h3>
                <p className="profile-at">@{getUser.login}</p>
              </div>

              <p className="profile-bio">{getUser.bio}</p>
              <p className="profile-follows-followers">{getUser.followers} followers · {getUser.following} following</p>

            </div>

          </div>
        )
      }
    </>
  );
}
