import React from 'react'

const RepoListElement = ({ language, description, name, html_url }) => (
  <li
    className='list-group-item'
  >
    <a href={html_url} target='_blank' rel='noopener noreferrer'>
      <h3 className='blueText'>{ name }</h3>
      <p> Language:
          {
            language
            ? <span className='greenText'> { language }</span>
            : <span className='redText'> Unknown </span>
          }
      </p>
      <p>Description:</p>
      {
        description
        ? <span className='greenText'> { description }</span>
        : <span className='redText'> None </span>
      }
    </a>
  </li>
)

export default RepoListElement
