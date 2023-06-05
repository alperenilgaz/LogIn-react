import React from 'react'
import './input.css'
function Input({type,placeholder,onChange,value}) {
  return (
    <div>
        <input value={value} onChange={onChange} placeholder={placeholder} type={type} className='input' />
    </div>
  )
}

export default Input