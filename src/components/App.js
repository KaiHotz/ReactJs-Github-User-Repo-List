import axios from 'axios'
import React, { Component } from 'react'
import RepoListElement from './RepoListElement'

const API_URL = 'https://api.github.com/users'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      inputValue: '',
      userFound: false,
      apiMsg: '',
      repos: [],
      userInfo: {}
    }
  }

  gitSearch = (username) => {
    this.setState({ inputValue: username });

    (username !== '')
        ? axios.get(`${API_URL}/${username}/repos`)
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
        : this.setState({ repos: [] })
  }

  render () {
    const { userInfo: { avatar_url, login, html_url }, userName, repos } = this.state
    return (
      <div>
        <div className='search-bar'>
          <input
            placeholder="Enter a Github User's name"
            value={userName}
            onChange={event => this.gitSearch(event.target.value)}
            type='text'
          />
        </div>
        <div className='user-info'>
          <img className='img-responsive center-block' src={avatar_url} />
          <h3>{ login }</h3>
          <h4><a href={html_url} target='_blank'>{ html_url }</a></h4>
        </div>
        <div className='repo-list'>
          <h4>List of available repositories:</h4>
          <p>(click on any repo to visit on GitHub)</p>
          <ul>
            <RepoListElement repos={repos} />
          </ul>
        </div>
      </div>
    )
  }
}

export default App
