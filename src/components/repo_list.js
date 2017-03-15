import React, {Component} from 'react';
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
    <div className="repo-list">
      <h4>List of available repositories:</h4>
      <p>(click on any repo to visit on GitHub)</p>
      <ul>
        {repoItems}
      </ul>
    </div>
  );
};


export default RepoList;
