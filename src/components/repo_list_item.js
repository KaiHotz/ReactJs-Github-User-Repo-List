import React from 'react';


const RepoListItem = ({repo}) => {

  return (
    <li>
      <a href={repo.html_url} target="_blank">{repo.name}</a>
      <p> Language:
        {repo.language !== null ? <span className="greenText"> {repo.language}</span> : <span className="redText"> Unknown </span>}
      </p>
      <p>Description:</p>
      {repo.description !== null ? <span className="greenText"> {repo.description}</span> : <span className="redText"> None </span>}
    </li>
  );

};

export default RepoListItem;
