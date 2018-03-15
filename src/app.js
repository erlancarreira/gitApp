import React, { Component } from 'react'

import AppContent from './components/appContent'
import ajax from '@fdaciuk/ajax'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userInfo: null,
      repos: [],
      starred: []
    }
  }

  handleSearch (e) {
    const keyCode = e.which || e.keyCode
    const user = e.target.value
    const enter = 13

    if (keyCode === enter) {
      ajax().get(`https://api.github.com/users/${user}`)
        .then(result => {
          this.setState({
            userInfo: {
              userName: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            }
          })
        })
    }
  }

  handleClick () {
    const user = this.state.userInfo.login
    ajax().get(`https://api.github.com/users/${user}/repos`)
      .then(result => {
        console.log(result)
        this.setState({
          repos: result
        })
      })
  }

  render () {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        handleClick={() => this.handleClick()}
      />
    )
  }
}

export default App
