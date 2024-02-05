import React, {useState, useEffect} from 'react';
import Container from '../components/Container';
import CardContainer from '../components/CardContainer';
import Typography from '../components/Typography';

const Keycodes = () => {

    const getKeycodes = () => {
        window.addEventListener('keydown', (event) => {
            setKeys([event.key, event.keyCode, event.code]);
        });
    }

    const [keys, setKeys] = useState([]);

    useEffect(() => {
        getKeycodes();
    }, [])

    return (
        <Container className="keycode__container">
            {keys && keys.length === 0 && 
                <CardContainer classes="keycode__item--container">
                    <Typography 
                        type="paragraph"
                        classes="keycode__empty-state"
                    >   
                        Press any key to get the keyCode
                    </Typography>
                </CardContainer>
            }

            {keys && keys.length > 0 && 
                <Container className="keycode__item">
                    <Typography 
                        type="span"
                        classes="keycode__header"
                    >
                        event.key
                    </Typography>
                    <CardContainer classes="keycode__item--container">
                        <Typography 
                            type="paragraph" 
                            classes="keycode__item--label"
                        >
                            {keys[0]}
                        </Typography>
                    </CardContainer>
                </Container>
            }
            {keys && keys.length > 0 && 
                <Container className="keycode__item">
                    <Typography 
                        type="span"
                        classes="keycode__header"
                    >
                        event.keyCode
                    </Typography>
                    <CardContainer classes="keycode__item--container">
                        <Typography 
                            type="paragraph" 
                            classes="keycode__item--label"
                        >
                            {keys[1]}
                        </Typography>
                    </CardContainer>
                </Container>
            }
            {keys && keys.length > 0 && 
                <Container className="keycode__item">
                    <Typography 
                        type="span"
                        classes="keycode__header"
                    >
                        event.code
                    </Typography>
                    <CardContainer classes="keycode__item--container">
                        <Typography 
                            type="paragraph" 
                            classes="keycode__item--label"
                        >
                            {keys[2]}
                        </Typography>
                    </CardContainer>
                </Container>
            }
        </Container>
    )
}

export default Keycodes
