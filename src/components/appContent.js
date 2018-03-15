import React, { PropTypes } from 'react'

import Search from './search'
import UserInfo from './userInfo'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({ userInfo, repos, starred, handleSearch, handleClick }) => (
  <div className='app'>
    <Search handleSearch={handleSearch} />
    { !!userInfo && <UserInfo userInfo={userInfo} /> }
    { !!userInfo && <Actions handleClick={handleClick} /> }
    { !!repos.length && <Repos
      className='repos'
      title='Repositórios'
      repos={repos}
    /> }
    { !!starred.length && <Repos
      className='starred'
      title='Favoritos'
      repos={repos}
    /> }
  </div>
)

AppContent.propTypes = {
  userInfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired
}

export default AppContent
