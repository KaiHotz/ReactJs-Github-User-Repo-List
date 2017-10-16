import _ from 'lodash'
import React from 'react'

const RepoListElement = ({ repos }) => {
  return _.map(repos, repo => {
    const { language, description, name, html_url } = repo
    return (
      <li
        key={repo.id}
        className='list-group-item'
        onClick={() => window.open(html_url, '_blank')}
        >
        <h3 className='blueText'>{ name }</h3>
        <p> Language:
            {language !== null ? <span className='greenText'> { language }</span> : <span className='redText'> Unknown </span>}
        </p>
        <p>Description:</p>
        {description !== null ? <span className='greenText'> { description }</span> : <span className='redText'> None </span>}
      </li>
    )
  })
}

export default RepoListElement
