import React from 'react'

const ButtonComponent = ({
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

export default ButtonComponent
