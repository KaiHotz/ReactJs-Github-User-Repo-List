import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import fetch from 'simple-fetch';
import SearchBar from './search_bar';
import UserInfo from './user_info';
import RepoList from './repo_list';

const API_URL = 'https://api.github.com/users';

export default class Main extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          inputValue: '',
          userFound: false,
          apiMsg: '',
          repos: []
      };


  }

  gitSearch = (username) => {

    this.setState({ inputValue: username });

    (username !== '') ?
        fetch.getJson(`${API_URL}/${username}/repos`)
            .then(result => this.setState({ repos: result, userFound: true }))
            .catch(err => {
                this.setState({ repos: [], userFound: false, apiMsg: err.message });
            }) :
        this.setState({ repos: [] });
  }

  render(){

    const gitSearch = _.debounce((username) => { this.gitSearch(username) }, 500);

    return (
      <div className="app">
        <h1>GitHub User Search</h1>
        <SearchBar onSearchTermChange={ this.gitSearch }/>
        {
          this.state.userFound && this.state.repos.length > 0 ?
          <div>
            <UserInfo
              info={ this.state.repos[0] }
            />
            <RepoList
              repos={ this.state.repos }
            />
          </div>
         :
          <div className="redText">{ this.state.apiMsg }</div>
        }
      </div>
    );
  }
}
