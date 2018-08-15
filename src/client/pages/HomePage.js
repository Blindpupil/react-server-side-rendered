import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h2>Welcome Home</h2>
      <button onClick={()=>{console.log('Events are handled!')}}>Click meh</button>
    </div>
  )
}

export default { component: HomePage }