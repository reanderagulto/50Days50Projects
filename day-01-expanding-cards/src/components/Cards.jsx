import React from 'react';
import Card from './Card';

const Cards = () => {
    const cards = [
        {
            image: 'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 
            title: 'Explore The World',
            status: 1
        }, 
        {
            image: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 
            title: 'Wild Forest'
        }, 
        {
            image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80', 
            title: 'Sunny Beach'
        }, 
        {
            image: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80', 
            title: 'City on Winter'
        }, 
        {
            image: 'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', 
            title: 'Mountains - Clouds'
        }, 
    ];

    return (
        <div className="cards__panel--container">
            {cards && cards.map((item, index) => {
                return <Card 
                    key={index}
                    image={item.image}
                    title={item.title}
                    status={item.status}
                />
            })}
        </div>
    )
}

export default Cards
