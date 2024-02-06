import React from 'react'

const ButtonComponent = ({
    id,
    classes = '',
    label,
    type = 'button',
    dataId,
    onClick = () => {}
}) => {
    return (
        <button
            type={type}
            id={id}
            className={`form-control__button ${classes}`}
            onClick={onClick}
            data-id={dataId}
        >
            {label}
        </button>
    )
}

export default ButtonComponent
