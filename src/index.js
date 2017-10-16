import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import '@/style/style.scss'

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
