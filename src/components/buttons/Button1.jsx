import React from 'react'
import './Button1.css'

const Button1 = ({value, handleClick}) => {
  return (
    <div className='gradiantButton' onClick={handleClick}>{value}</div>
  )
}

export default Button1