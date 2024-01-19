import React from 'react'

const Card = ({
    image, 
    title, 
    status
}) => {
    const cardClick = (e) => {
        const items = document.querySelectorAll('.cards__panel--item');
        items.forEach((item, index) => {
            item.classList.remove('active');
        })
        e.classList.add('active');
    }

    return (
        <div 
            className={`cards__panel--item${status && status === 1 ? ' active' : ''}`}
            style={{
                background: `url(${image})`
            }}
            onClick={(e) => cardClick(e.target)}
        >
            <h3>{title}</h3>
        </div>
    )
}

export default Card
