import React from 'react'

const TextInput = ({
    id,
    placeholder, 
    className
}) => {
  return (
    <input 
        type="text" 
        id={id}
        placeholder={placeholder}
        className={className}
    />
  )
}

export default TextInput
