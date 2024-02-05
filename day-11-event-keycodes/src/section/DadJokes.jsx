import React, {useState, useEffect} from 'react';
import axios from 'axios';

import CardContainer from '../components/CardContainer';
import Typography from '../components/Typography';
import ButtonComponent from '../components/ButtonComponent';

const DadJokes = () => {
    
    const [joke, setJoke] = useState("");

    const getJoke = async () => {
        axios.get(
            'https://icanhazdadjoke.com', {
                headers: {
                    Accept: 'application/json'
                }
            }).then (function(response) {
                setJoke(response.data.joke);
            });
    }

    useEffect(() => {
        getJoke();
    }, [])

    return (
        <CardContainer>
            <Typography type="header-3" classes="text-inactive"> Don't Laugh Challenge</Typography>
            <Typography text="paragraph">{joke}</Typography>
            <ButtonComponent 
                label="Get Another Joke"
                classes="m-auto"
                onClick={() => getJoke()}
            />
        </CardContainer>
    )
}

export default DadJokes
