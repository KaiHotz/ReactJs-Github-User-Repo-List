import React, { Component, Fragment } from 'react'
import axios from 'axios'
import _ from 'lodash'
import RepoListElement from './RepoListElement'

const API_URL = 'https://api.github.com/users'

class GithubSearch extends Component {
  state = {
    username: '',
    apiMsg: '',
    repos: [],
    userInfo: {}
  }

  handleChange = event => {
    this.setState({ username: event.target.value });
    setTimeout(this.handleSearch, 1000)
  }

  handleSearch = () => {
    axios.get(`${API_URL}/${this.state.username}/repos`)
      .then(
        result => this.setState({
          repos: result.data,
          userInfo: result.data[0].owner
        })
      )
      .catch(err => {
        this.setState({
          repos: [],
          apiMsg: err.message
        })
      })
  }

  render () {
    const {
      username,
      repos,
      apiMsg,
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
            onChange={this.handleChange}
            type='text'
          />
          <p className='redText'>{ apiMsg }</p>
        </div>
        {
          repos.length > 0 &&
            <Fragment>
              <div className='user-info'>
                <img className='img-responsive center-block' src={avatar_url} />
                <h3>{ login }</h3>
                <h4><a href={html_url} target='_blank'>{ html_url }</a></h4>
              </div>
              <div className='repo-list'>
                <h4>List of available repositories:</h4>
                <p>(click on any repo to visit on GitHub)</p>
                <ul>
                  {_.map(repos, repo => <RepoListElement key={repo.id} {...repo} />)}
                </ul>
              </div>
            </Fragment>
        }
      </Fragment>
    )
  }
}

export default GithubSearch
