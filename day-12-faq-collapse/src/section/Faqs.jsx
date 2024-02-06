import React from 'react';
import Container from '../components/Container';
import Typography from '../components/Typography';
import FaqCard from '../components/FaqCard';

const Faqs = () => {

    const data = [
        {
            header: "Why shouldn't we trust atoms?",
            body: "They make up everything", 
            active: true
        }, 
        {
            header: "What do you call someone with no body and no nose?",
            body: "Nobody knows.", 
            active: false
        }, 
        {
            header: "What's the object-oriented way to become wealthy?",
            body: "Inheritance.", 
            active: false
        }, 
        {
            header: "How many tickles does it take to tickle an octopus?",
            body: "Ten-tickles!", 
            active: false
        }, 
        {
            header: "What is: 1 + 1?",
            body: "Depends on who are you asking.", 
            active: false
        }, 
    ];

    return (
        <Container className="faq__container">
            <Typography 
                type="header-1"
                classes="faq__header text-center"
            >
                Frequently Asked Questions
            </Typography>
            <Container className="faq__item--container">
                {data && data.map((item, index) => {
                    return (
                        <FaqCard 
                            key={index}
                            header={item.header}
                            body={item.body}
                            isActive={item.active}
                        />
                    )
                })}
            </Container>
        </Container>
    )
}

export default Faqs
