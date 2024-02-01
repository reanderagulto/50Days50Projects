import React from 'react'

const ButtonComponent = ({
    id,
    classes = '',
    label,
    type = 'button',
}) => {
    return (
        <button
            type={type}
            id={id}
            className={`form-control__button ${classes}`}
        >
            {label}
        </button>
    )
}

export default ButtonComponent
