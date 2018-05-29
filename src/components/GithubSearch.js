import React, { Component, Fragment } from 'react'
import axios from 'axios'
import _ from 'lodash'
import RepoListElement from './RepoListElement'

const API_URL = 'https://api.github.com/users'

class GithubSearch extends Component {
  state = {
    username: '',
    userFound: false,
    apiMsg: '',
    repos: [],
    userInfo: {}
  }

  handleInput = event => {
    this.setState({ username: event.target.value });
    setTimeout(this.handleSearch, 1000)
  }

  handleSearch = () => {
    axios.get(`${API_URL}/${this.state.username}/repos`)
      .then(
        result => this.setState({
          repos: result.data,
          userFound: true,
          userInfo: result.data[0].owner
        })
      )
      .catch(err => {
        this.setState({
          repos: [],
          userFound: false,
          apiMsg: err.message
        })
      })
  }

  render () {
    const {
      username,
      repos,
      userInfo: {
        avatar_url,
        login,
        html_url
      }
    } = this.state
    return (
      <Fragment>
        <div className='search-bar'>
          <input
            placeholder="Enter a Github User's name"
            value={username}
            onChange={this.handleInput}
            type='text'
          />
        </div>
        <div className='user-info'>
          <img className='img-responsive center-block' src={avatar_url} />
          <h3>{ login }</h3>
          <h4><a href={html_url} target='_blank'>{ html_url }</a></h4>
        </div>
        {
          repos.length > 0 &&
            <div className='repo-list'>
              <h4>List of available repositories:</h4>
              <p>(click on any repo to visit on GitHub)</p>
              <ul>
                {_.map(repos, repo => <RepoListElement key={repo.id} {...repo} />)}
              </ul>
            </div>
        }
      </Fragment>
    )
  }
}

export default GithubSearch
