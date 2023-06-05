import React from 'react'
import './button.css'
function Button({onClick}) {
  return (
    <div>
        <button onClick={onClick} className='button'>Login</button>
    </div>
  )
}

export default Button