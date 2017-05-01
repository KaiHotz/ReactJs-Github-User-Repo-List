import _ from 'lodash';
import axios from 'axios';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

const API_URL = 'https://api.github.com/users';

export default class Main extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          inputValue: '',
          userFound: false,
          apiMsg: '',
          repos: [],
          userInfo:{}
      };
  }

  onInputChange(userName) {
    this.setState({userName});
  }

  renderList() {
    return _.map(this.state.repos, repo => {
      return (
          <li
            key={repo.id}
            className="list-group-item"
            onClick={() => window.open(repo.html_url, "_blank")}
          >
            <h3 className="blueText">{repo.name}</h3>
            <p> Language:
              {repo.language !== null ? <span className="greenText"> {repo.language}</span> : <span className="redText"> Unknown </span>}
            </p>
            <p>Description:</p>
            {repo.description !== null ? <span className="greenText"> {repo.description}</span> : <span className="redText"> None </span>}
          </li>
      );
    });
  }

  gitSearch = (username) => {

    this.setState({ inputValue: username });

    (username !== '') ?
        axios.get(`${API_URL}/${username}/repos`)
            .then(
              result => this.setState({ repos: result.data, userFound: true , userInfo:result.data[0].owner})
              )
            .catch(err => {
                this.setState({ repos: [], userFound: false, apiMsg: err.message });
            }) :
        this.setState({ repos: [] });
  }

  render() {
    return (
      <div>
        <div className="search-bar">
          <input
            placeholder="Enter a Github User's name"
            value={this.state.userName}
            onChange={ event =>  this.gitSearch(event.target.value)}
            type="text"
          />
        </div>
        <div className="user-info">
          <img className="img-responsive center-block" src={this.state.userInfo.avatar_url} />
          <h3>{this.state.userInfo.login}</h3>
          <h4><a href={this.state.userInfo.html_url} target="_blank">{this.state.userInfo.html_url}</a></h4>
        </div>
        <div className="repo-list">
          <h4>List of available repositories:</h4>
          <p>(click on any repo to visit on GitHub)</p>
          <ul>
            {this.renderList()}
          </ul>
        </div>
      </div>
    );
  }
}
