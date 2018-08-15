import React from 'react'

const HomePage = () => {
  return (
    <div className='center-align video-container' style={{marginTop: '6rem'}}>
      <h2>Welcome Home</h2>
      <div>
        <button className='waves-effect waves-light btn'
          onClick={()=>{console.log('Events are handled!')}}
        >
          Click meh
        </button>
      </div>
    </div>
  )
}

export default { component: HomePage }