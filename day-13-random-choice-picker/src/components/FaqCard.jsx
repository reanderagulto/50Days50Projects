import React, {useState} from 'react'; 
import Container from './Container';
import CardContainer from './CardContainer';
import Typography from './Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faChevronDown,
    faCircleXmark
} from '@fortawesome/free-solid-svg-icons'

const FaqCard = ({
    header = "", 
    body = "", 
    isActive = false
}) => {

    const [active, setActive] = useState(isActive);

    return (
        <CardContainer classes={`faq__item ${active ? 'active' : ''}`}>
            <Container className="faq__item--header">
                <Typography
                    type="header-3"
                    classes="faq__item--header-text"
                >
                    {header}
                </Typography>
                <button 
                    type="button" className="faq__item--toggle"
                    onClick={() => {
                        setActive(active => !active);
                    }}
                >
                    <FontAwesomeIcon className="faq__item--toggle-icon faq__item--toggle-open" icon={faChevronDown} />
                    <FontAwesomeIcon className="faq__item--toggle-icon faq__item--toggle-close" icon={faCircleXmark} />
                </button>
            </Container>
            <Container className="faq__item--content">
                {body}
            </Container>
        </CardContainer>
    )
}

export default FaqCard
