import React from 'react'

const Theme = ({on , setOn}) => {
  return (
    <div className='theme-btn' onClick={() => setOn(!on)}>
        <i className="fas fa-adjust"></i>
    </div>
  )
}

export default Theme
