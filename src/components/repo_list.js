import React from 'react';
import RepoListItem from './repo_list_item';

const RepoList = (props) => {

  const repoItems = props.repos.map((repo, index)=>{
    return (
      <RepoListItem
        key={index}
        repo={repo}
      />
    );
  });

  return (
    <ul className="col-md-12 list-group">
      {repoItems}
    </ul>
  );
};


export default RepoList;
