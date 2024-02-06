import React from 'react'

const CardContainer = ({
    children, 
    classes = "",
}) => {
    return (
        <div className={`card__container ${classes}`}>
            {children}
        </div>
    )
}

export default CardContainer
