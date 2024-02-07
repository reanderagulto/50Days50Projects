import React from 'react'

const TextInput = ({
    type = 'text', 
    name, 
    id, 
    classes,
    onChange = () => {}, 
    value = ""
}) => {
  switch (type) {
    case 'text':
        return (
            <input 
                type="text" 
                name={name} 
                id={id}
                className={`form-control__text-input ${classes}`} 
                value={value}
                onChange={onChange}
            />
        )
    case 'textarea':
        return (
            <textarea
                id={id}
                name={name}
                className={`form-control__textarea ${classes}`}
                onChange={onChange}
            >
                {value}
            </textarea>
        )
    default:
        break;
  }
}

export default TextInput
