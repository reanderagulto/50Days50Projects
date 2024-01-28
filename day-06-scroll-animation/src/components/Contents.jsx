import React from 'react';
import ContentCard from './ContentCard';

const Contents = () => {

    const items = Array.from({ length: 13 }, (_, index) => index + 1);

    return (
        <div className="cards__container">
            {items && items.map((item, index) => {
                return (
                    <ContentCard 
                        key={index}
                        label="Content"
                    />
                )
            })}
        </div>
    )
}

export default Contents
