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

  getRepos () {
    const user = this.state.userInfo.login
    ajax().get(`https://api.github.com/users/${user}/repos`)
      .then(result => {
        console.log(result)
        this.setState({
          repos: result
        })
      })
  }

  getStarred () {
    const user = this.state.userInfo.login
    ajax().get(`https://api.github.com/users/${user}/starred`)
      .then(result => {
        console.log(result)
        this.setState({
          starred: result
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
        getRepos={() => this.getRepos()}
        getStarred={() => this.getStarred()}
      />
    )
  }
}

export default App
