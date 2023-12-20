import React from 'react'

function nameList() {
    const names = ['betty', 'hanna', 'henok']
  return (
    <div>
    {
        names.map(name => <h2>{name}</h2>)
    
    }
     
    </div>
  )
}

export default nameList
