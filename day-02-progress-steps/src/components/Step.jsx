import React from 'react'

const Step = ({
    id, 
    label, 
    className,
    on_click,
}) => {
  return (
    <span
        id={id}
        className={className}
        onClick={on_click}
    >
        {label}
    </span>
  )
}

export default Step
