import React from 'react'
import ReactDOM from 'react-dom'
import App from '@/src/components/App'
import '@/styles/styles.scss'

const render = Component => {
  ReactDOM.render(
    <Component />
    , document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const App = require('./components/App').default
    render(App)
  })
}
