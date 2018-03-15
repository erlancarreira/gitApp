import React, { Component } from 'react'

import AppContent from './components/appContent'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: {
        userName: 'Marcus',
        photo: 'https://avatars1.githubusercontent.com/u/7614138?v=4',
        login: 'mvcbotelho',
        repos: 37,
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
