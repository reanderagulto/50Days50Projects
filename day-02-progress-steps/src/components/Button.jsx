import React from 'react'

const Button = ({
    id,
    label, 
    className, 
    type = "button", 
    disabled = false,
    on_click
}) => {
  return (
    <button 
        id={id}
        className={className}
        type={type}
        onClick={on_click}
        disabled={disabled}
    >
        {label}
    </button>
  )
}

export default Button
