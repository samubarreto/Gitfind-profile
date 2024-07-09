import { React, useState, useEffect } from "react"
import { getReposByUsername } from '../services/api.js'
import LoadingScreen from "./LoadingScreen.jsx";

export default function Repos({ getSearch }) {

  const [getRepos, setRepos] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (getSearch) {
      setLoading(true);
      getReposByUsername(getSearch)
        .then(response => {
          if (response.status === 200) {
            return response.json();
          }
          setRepos([]);
          setLoading(false);
        })
        .then(data => {
          setRepos(data);
          setLoading(false);
        })
        .catch(error => {
          console.error(error);
          setRepos([]);
          setLoading(false);
        });
    }
  }, [getSearch]);

  return (
    <>

      {isLoading && <LoadingScreen></LoadingScreen>}

      {
        getRepos && (

          getRepos.map(repo => (
            <div className="repo-container" key={repo.id}>
              <div className="flex-row small-gap">
                <a href={repo.html_url} target="_blank">
                  <h3 className="repo-name">{repo.name}</h3>
                </a>
                <span className="repo-others">·</span>
                <p className="repo-visibility">{repo.visibility}</p>
                <span className="repo-others">·</span>
                <p className="repo-others">{repo.language ? repo.language : "no lang"}</p>
                <span className="repo-others">·</span>
                <p className="repo-others">
                  forks: {repo.forks}
                </p>
              </div>
              <p className="repo-desc">{repo.description}</p>
              <div className="flex-row small-gap flex-wrap">
                {
                  repo.topics.map(topic => (
                    <span className="repo-topic" key={topic}>{topic}</span>
                  ))
                }
              </div>
            </div>
          ))
        )
      }

    </>
  )
}