import React from 'react'

const Actions = ({ handleClick }) => (
  <div className='actions'>
    <button
      onClick={handleClick}>Ver repositórios</button>
    <button>Ver favoritos</button>
  </div>
)

export default Actions
