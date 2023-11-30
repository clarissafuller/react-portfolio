import React, { useEffect, useState } from "react";

const Github = () => {
  const [githubStats, setGitHubStats] = useState({
    stargazers_count: null,
    forks_count: null,
  });

  useEffect(() => {
    fetch("https://api.github.com/repos/clarissafuller/react-portfolio")
      .then((response) => response.json())
      .then((json) => {
        setGitHubStats({
          stargazers_count: json.stargazers_count,
          forks_count: json.forks_count,
        });
      })
      .catch(() => console.log("Error calling GitHub API"));
  }, []);

  return (
    <div>
      Forks: {githubStats.forks_count}
      <br />
      Stargazers: {githubStats.stargazers_count}
    </div>
  );
};

export default Github;
