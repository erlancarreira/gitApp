import React, { Component } from 'react'

import AppContent from './components/appContent'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: {
        userName: 'Marcus',
        repos: 36,
        followers: 3,
        following: 0
      },
      repos: [{
        name: 'Repositório',
        link: '#'
      }],
      starred: [{
        name: 'Repositório',
        link: '#'
      }]
    }
  }
  render () {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
      />
    )
  }
}

export default App
