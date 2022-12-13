import React from 'react'

function Container({children}) {
  return (
    <div className='max-w-7xl min-h-screen mx-auto border flex'>{children}</div>
  )
}

export default Container