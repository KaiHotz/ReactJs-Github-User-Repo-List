import React from 'react';


const RepoistItem = ({repo}) => {

  return (
    <li className="list-group-item">
      <a href={repo.html_url}>{repo.name}</a>
    </li>
  );

};

export default RepoistItem;
